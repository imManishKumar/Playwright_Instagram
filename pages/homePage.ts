import { Page } from "@playwright/test";

export default class HomePage{
    constructor(public page:Page){}

    async clickOnSearch(){
        const searchBtn = await this.page.locator("//span[text()='Search']")
        await searchBtn.click()
    }

    async enterTextInSearchField(profile:string){
        await this.page.locator("input[placeholder='Search']").fill(profile)
    }

    async clickOnProfile(){
        await this.page.getByAltText("virat.kohli's profile picture")
                        .click({timeout:10000})
    }
    async checkProfileDisplayed(){
        await this.page.locator("//span[text()='virat.kohli']")
                        .isVisible({timeout:10000})
    }
}