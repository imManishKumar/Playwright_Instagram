import { Page } from "@playwright/test";

export default class HomePage{
    constructor(public page:Page){}

    async clickOnSearch(){
        await this.page.locator("//span[text()='Search']")
                        .click()
    }

    async enterTextInSearchField(profile:string){
        await this.page.getByPlaceholder("Search")
                        .fill(profile)
    }

    async clickOnProfile(){
        await this.page.getByAltText("virat.kohli's profile picture")
                        .click()
    }
    async checkProfileDisplayed(){
        await this.page.locator("//span[text()='virat.kohli']")
                        .isVisible()
    }
}