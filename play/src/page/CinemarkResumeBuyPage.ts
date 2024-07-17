import { Page } from "@playwright/test";

export class CinemarkResumeBuyPage {
    readonly page:Page;
    private text:string;
    private precioFinal:string;

    constructor(page:Page) {
        this.page = page;
        this.text = "//*[@class = 'ant-col ant-col-12 text--right']";
    }


    async wachtResume() {
        
        await this.page.waitForLoadState();
        await this.page.locator(this.text).last().waitFor();
        this.precioFinal =  await this.page.locator(this.text).last().innerText();
        await this.page.getByRole('button', { name: 'continuar' }).click({force:true});
        

    }
}