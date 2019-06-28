const puppteer = require('puppeteer');

(async () => {
  const browser = await puppteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:7777', { waitUntil: 'networkidle2' });
  await page.pdf({
    path: 'resume.pdf',
    pageRanges: '1',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
})();
