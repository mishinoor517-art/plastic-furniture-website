const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const failures = [];

  page.on('requestfailed', (request) => {
    failures.push(`${request.url()} :: ${request.failure()?.message}`);
  });

  await page.goto('http://localhost:3000/products/sigma-classic-moulded-chair', {
    waituntil: 'networkidle',
    timeout: 5000,
  });

  const expected = {
    Blue: '/images/product-1/product-1-blue.png',
    Orange: '/images/product-1/product-1-orange.png',
    Red: '/images/product-1/product-1-red.png',
    White: '/images/product-1/product-1-white.png',
    Yellow: '/images/product-1/product-1-yellow.png',
  };

  for (const [color, expectedImage] of Object.entries(expected)) {
    await page.getByRole('button', { name: `Select ${color}` }).click();

    const image = page.getByRole('img', { name: `SIGMA Classic Moulded Chair - ${color}` });
    await image.waitFor({ state: 'attached', timeout: 3000 });

    const src = await image.getAttribute('src');
    console.log(`${color} => ${src} | expected ${expectedImage} | ${src === expectedImage ? 'OK' : 'BAD'}`);

    if (src !== expectedImage) {
      failures.push(`${color} expected ${expectedImage} but got ${src}`);
    }
  }

  await browser.close();

  if (failures.length > 0 || (await page.isClosed()) === false) {
    console.log('BROWSER-FAILURES', failures.join(' | '));
    process.exit(1);
  }
})();
