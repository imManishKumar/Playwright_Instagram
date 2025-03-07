import {chromium, test} from '@playwright/test'

test('demo', async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.instagram.com/")
    await page.fill("//input[@name='username']", "legal.machine.almanack")
    await page.fill("//input[@name='password']", "Almanack@123")
    await page.locator("//button[@type='submit']").click()

    // await page.locator("//span[text()='Search']").click()
    // await page.getByPlaceholder("Search").fill("Virat Kohli")
    // await page.getByAltText("virat.kohli's profile picture").click()
    
    // await page.locator("//div[text()='Message']").click()
    // await page.locator("//div[@aria-describedby='Message']").fill("How are you?")
    // await page.waitForTimeout(5000)

})
