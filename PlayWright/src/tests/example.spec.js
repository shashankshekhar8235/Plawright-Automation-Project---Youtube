import {test, expect} from '@playwright/test';
import loginPage from '../pages/loginPage';

test("login Test", async ({page}) => {

  const loginPage = new loginPage(page);

  await loginPage.navigateToPage();
  await loginPage.UsernameInput("shashankyes");
  await loginPage.passwordInput("123456");

  const homePage = await loginPage.clickLoginButton();
  await homePage.expectServiceTitle();

})
