const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const requestFailures = [];
  const responseLines = [];

  page.on('requestfailed', (request) => {
    requestFailures.push(`FAILED ${request.url()} :: ${request.failure()?.message ?? 'no-message'}`);
  });

  page.on('response', (response) => {
    if (response.status() >= 400) {
      responseLines.push(`HTTP ${response.status()} ${response.url()}`);
    }
  });

  await page.goto('http://localhost:3000/products/sigma-classic-moulded-chair', {
    waituntil: 'networkidle',
    timeout: 5000,
  });

  const expected = {
    Blue: 'product-1-blue.png',
    Orange: 'product-1-orange.png',
    Red: 'product-1-red.png',
    White: 'product-1-white.png',
    Yellow: 'product-1-yellow.png',
  };

  for (const [color, expectedImage] of Object.entries(expected)) {
    await page.getByRole('button', { name: `Select ${color}` }).click();

    const image = page.getByRole('img', { name: `SIGMA Classic Moulded Chair - ${color}` });
    await image.waitFor({ state: 'attached', timeout: 3000 });

    const browserRenderedSrc = await image.evaluate((node) => node.currentSrc);
    const decodedBrowserRenderedSrc = decodeURIComponent(browserRenderedSrc ?? '');

    console.log(`${color} => browserCurrentSrc=${browserRenderedSrc} | expectedToken=${expectedImage} | ${decodedBrowserRenderedSrc.includes(expectedImage) ? 'OK' : 'BAD'}`);

    if (!decodedBrowserRenderedSrc.includes(expectedImage)) {
      requestFailures.push(`${color} rendered currentSrc doesn't contain ${expectedImage} :: ${browserRenderedSrc}`);
    }
  }

  if (responseLines.length || requestFailures.length) {
    console.log('RESPONSE-FAILURES', responseLines.join(' | '));
    console.log('REQUEST-FAILURES', requestFailures.join(' | '));
  }

  await browser.close();
})();
