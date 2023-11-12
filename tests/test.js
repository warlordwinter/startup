const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Test for /login endpoint
  await page.goto('http://localhost:4000');
  await page.fill('input[name="username"]', 'John');
  await page.fill('input[name="password"]', 'mypasswordislit');
  await page.click('button[id="loginBtn"]');
  const loginResponse = await page.textContent('#loginResponse');
  console.log(loginResponse);

  // Test for /signup endpoint
  await page.goto('http://localhost:4000');
  await page.fill('input[name="username"]', 'NewUser');
  await page.fill('input[name="password"]', 'newpassword');
  await page.click('button[id="signupBtn"]');
  const signupResponse = await page.textContent('#signupResponse');
  console.log(signupResponse);

  await browser.close();
})();
