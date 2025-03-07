import { Page } from "@playwright/test";
export default class ProfilePage{

    constructor(public page:Page){}

    async clickOnMessage(){
        await this.page.locator("//div[text()='Message']")
                            .click()
    }

    async sendMessage(message:string){
        await this.page.locator("//div[@aria-describedby='Message']")
                        .fill(message)
    }

}