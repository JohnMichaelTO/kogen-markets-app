const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true, // You can set this to 'false' if you want to see the browser UI
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // To avoid sandbox issues in CI environments
    });

    const page = await browser.newPage();

    // Capture console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log('Console Error:', msg.text());
      }
    });

    // Navigate to the page
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    // Check for visible error messages
    const errorMessage = await page.evaluate(() => {
      const errorElement = document.body.innerText;
      if (errorElement && errorElement.includes("Sorry, an unexpected error has occurred")) {
        return errorElement;
      }
      return null;
    });

    if (errorMessage) {
      console.log('Visible Error Message:', errorMessage);
    } else {
      console.log('No error messages found.');
    }

    await browser.close();
  } catch (err) {
    console.error('Error during Puppeteer execution:', err);
  }
})();
