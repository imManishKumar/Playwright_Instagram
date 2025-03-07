import {expect, Page} from '@playwright/test'
export default class LoginPage{
    constructor(public page: Page){}

    async enterUsername(userName: string){
        await this.page.waitForSelector("//input[@name='username']")
        await this.page.fill("//input[@name='username']", userName)
    }

    async enterPassword(password: string){
        await this.page.fill("//input[@name='password']",password)
                        
    }

    async clickLoginButton(){
        await this.page.locator("//button[@type='submit']")
                        .click()
    }

    async checkLoginSuccessful(){
        await expect(this.page.locator("//span[text()='Home']")).toBeVisible()  
    }
}