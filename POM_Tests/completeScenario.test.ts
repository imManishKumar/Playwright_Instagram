import {test} from '@playwright/test'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import ProfilePage from '../pages/profilePage'

const username = "legal.machine.almanack"
const password = "Almanack@123"

test('Scenario for Sending message to profile',async({page,baseURL})=>{
    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    const profilePage = new ProfilePage(page)

    await page.goto(`${baseURL}`)

    loginPage.enterUsername(username)
    loginPage.enterPassword(password)
    loginPage.clickLoginButton()
    loginPage.checkLoginSuccessful()

    homePage.clickOnSearch()
    homePage.enterTextInSearchField("Virat Kohli")
    homePage.clickOnProfile()
    homePage.checkProfileDisplayed()

    profilePage.clickOnMessage()
    profilePage.sendMessage("How are you?")

    await page.waitForTimeout(5000)

})