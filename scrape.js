const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://leetcode.com/problems/jewels-and-stones/");
    await page.waitForSelector(".tag__2PqS", { timeout: 5000 });

    const body = await page.evaluate(() => {
      return document.querySelector(".tag__2PqS").innerText;
    });
    console.log(body);

    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
