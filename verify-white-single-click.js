const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  const requestFailures = [];
  const failedResponses = [];

  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  page.on('requestfailed', (request) => {
    requestFailures.push({ url: request.url(), message: request.failure()?.message ?? 'no-message' });
  });

  page.on('requestfinished', (request) => {
    const response = request.response();
    if (response && response.status >= 400) {
      failedResponses.push({ url: request.url(), status: response.status });
    }
  });

  await page.goto('http://localhost:3000/products/sigma-classic-moulded-chair', {
    waituntil: 'networkidle',
    timeout: 5000,
  });

  const whiteButton = page.getByRole('button', { name: 'Select White' });
  await whiteButton.click();

  const img = page.getByRole('img', { name: 'SIGMA Classic Moulded Chair - White' });
  await img.waitFor({ state: 'attached', timeout: 3000 });

  const attr = await img.getAttribute('src');
  const current = await img.evaluate((node) => node.currentSrc);

  console.log(JSON.stringify({ attr, current, consoleErrors, requestFailures, failedResponses }));

  await browser.close();
})();
