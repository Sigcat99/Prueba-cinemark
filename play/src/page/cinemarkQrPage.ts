import { Page, expect } from "@playwright/test";

export class CinemarkQrPage {
    readonly page:Page;
    private  QrImage:string;
    constructor(page:Page) {
        this.page = page;
        this.QrImage = "//*[@class='jsx-335671319 text-center information-order']/div";
        
    }


    async validateQr() {
        
        await this.page.waitForLoadState();
        await this.page.getByRole('heading', { name: 'detalles de la compra' }).waitFor();
        await this.page.getByRole('heading', { name: 'detalles de la compra' }).isVisible();

        expect(this.page.locator(this.QrImage)).toBeVisible();
        
    }
}