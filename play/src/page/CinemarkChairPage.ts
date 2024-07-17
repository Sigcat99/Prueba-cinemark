import { Page, expect } from "@playwright/test";


export class CinemarkChairPage {

    readonly page:Page;
    private modalCloseBtn:string;
    private chairnum:string;
    private chairType;
    private carritonum:string;
    private continuarBtn:string;
    private modal:string;
    
    constructor(page:Page) {
        this.page = page;
        this.modalCloseBtn = "//*[@class = 'ant-modal-close-x']";
        this.chairnum = "//*[@class='select-seat-format ant-select ant-select-enabled']";
        this.chairType ={
            'BOLETA PRO 2D': "(//*[@class='select-seat-format ant-select ant-select-enabled'])[2]",
            'PK TTCONFI': "(//*[@class='select-seat-format ant-select ant-select-enabled'])[3]",
            'PK TTCON3': "(//*[@class='select-seat-format ant-select ant-select-enabled'])[4]",
            'BOLETA CUPON DESCUENTO': "(//*[@class='select-seat-format ant-select ant-select-enabled'])[2]"
        }; 
        this.carritonum = "//span[@class= 'jsx-1369409061 shopping-cart__badge-car']";
        this.continuarBtn = "//button[@title= 'continuar']";
        this.modal = "//*[@class= 'ant-modal-body']";

    }


    async  selectChair(tipoDeSilla:string,cantidad:string,sillas:string[]) {

        await  this.page.waitForSelector(this.modalCloseBtn);
        await this.page.locator(this.modalCloseBtn).click();
        await  this.page.locator(this.chairType[tipoDeSilla]).click();
        await this.page.getByRole('option', { name: cantidad }).click({timeout:5000});
        await this.page.waitForLoadState();
        await expect(this.page.locator(this.carritonum)).toBeVisible();
        await expect(this.page.locator(this.carritonum)).toHaveText("1");
        await this.page.locator(this.continuarBtn).click();
        
        sillas.forEach(async silla => {
            
            await this.page.waitForSelector(`//span[contains(text(),'${silla}')]`);
            await this.page.locator(`//span[contains(text(),'${silla}')]`).first().isEnabled();
            await this.page.locator(`//span[contains(text(),'${silla}')]`).first().click({force:true});
            await this.page.locator(this.continuarBtn).click();
            
        });
        await this.page.waitForSelector(this.modal);
        expect(this.page.getByRole('button', { name: 'confirmar' }),"Puestos no disponibles Cambiar de puestos").toBeVisible({timeout:10000});
        await this.page.getByRole('button', { name: 'confirmar' }).click();
        
    }


} 