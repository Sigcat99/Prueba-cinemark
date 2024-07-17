import { Page } from "@playwright/test";

export class CinemarPayInfoPage {
    readonly page:Page;
    
    private varCARD:string;
    private calendar:string
    private year:string;
    private month:string;
    private modalContinue:string;
    
    constructor(page:Page) {
        this.page = page;

        this.varCARD = " //div[@class='ant-collapse-header' and @aria-expanded= 'false']";
        this.calendar= "//input[@class='ant-calendar-picker-input ant-input']";
        this.year = "//a[@class='ant-calendar-year-select' and @title = 'Choose a year' ]";
        this.month = "//*[@class='ant-calendar-month-panel-cell' or @class= 'ant-calendar-month-panel-cell ant-calendar-month-panel-selected-cell'] ";
        this.modalContinue = "//*[@class='ant-modal-body']";
    }

    async buyWithCard(buyInfo:any) {
        
        await this.page.locator('#payment_type div').nth(1).waitFor();
        await this.page.locator('#payment_type div').nth(1).click();
        await this.page.getByRole('option', { name: buyInfo.tipoPersona }).click();
        await this.page.getByLabel('nombre', { exact: true }).fill(buyInfo.nombre);
        await this.page.getByLabel('apellido').fill(buyInfo.apellido);
        await this.page.locator('#payment_documentType div').nth(1).click();
        await this.page.getByRole('option', { name: buyInfo.tipoId }).click();
        await this.page.getByRole('spinbutton', { name: 'número de identificación *' }).fill(buyInfo.numeroIdentificacion);
        await this.page.locator('#payment_city').getByRole('textbox').fill(buyInfo.ciudad);
        await this.page.getByLabel('dirección').fill(buyInfo.direccion);
        await this.page.getByLabel('número de teléfono').fill(buyInfo.numeroTelefono);
        await this.page.getByLabel('correo electronico').fill(buyInfo.correo);
        await this.page.locator(this.varCARD).first().click();
        await this.page.getByLabel('número de tarjeta').fill(buyInfo.numeroTarjeta);
        await this.page.getByRole('textbox', { name: 'nombre como aparece en la' }).fill(buyInfo.nombre);
        await this.page.getByRole('spinbutton', { name: 'código de seguridad/CVV *' }).scrollIntoViewIfNeeded();
        await this.page.getByRole('spinbutton', { name: 'código de seguridad/CVV *' }).fill(buyInfo.tarjetaCVV);
        await this.page.locator('[id="payment_creditCard\\.installments"]').getByRole('combobox').click();
        await this.page.getByRole('option', { name: buyInfo.numeroCuotas, exact: true }).click();
        await this.page.getByLabel('He revisado la orden de').click();
        await this.dataPickerCard(buyInfo.fecha);
        await this.page.waitForLoadState();
        await this.page.getByRole('button', { name: 'continuar' }).click({force:true});
        await this.page.waitForLoadState();
        await this.page.locator(this.modalContinue).last().waitFor();
        await this.page.getByRole('button', { name: 'ACEPTAR', exact: true }).click();
        await this.page.waitForLoadState();
        
        

    }

    async dataPickerCard(fecha:string) {
        let año = fecha.split('/');
        await this.page.locator(this.calendar).last().click();
        let añocard = await this.page.locator(this.year).innerText();
        while(!añocard.includes(año[0])){
            await  this.page.getByRole('button', { name: 'Next year (Control + right)' }).click();
            añocard = await this.page.locator(this.year).innerText();
        }

        if(año[1].includes("01")){
            await this.page.locator(this.month).first().click();
        }else{

            
            await this.page.locator(this.month).nth(Number(año[1])-1).click();
        }
    }
}