import { Page, expect } from "@playwright/test";



export class CinemarkLoginPAGE {

    readonly page:Page;
    private url:string;
    private closeCard:string;
    private iniciarSesionBtn:string;
    private user:string;
    private password:string;
  


    constructor(page:Page) {
        this.page = page;
       // this.url= 'https://www.google.com/'
        this.url= 'https://cinemark-colombia-dev-staging-gzs859bsx-cinemark-colombia.vercel.app/';
        this.closeCard = "//*[@class = 'ant-modal-close-x']";
        this.iniciarSesionBtn = "//*[@type = 'button' and  @title= 'INICIAR SESIÓN' ]";
        this.user = "#MemberEmail";
        this.password = "#MemberPassword";
        
    }

    async login(user:string,password:string) {
        await this.page.goto(this.url);
        await this.page.waitForLoadState("load");
        await this.page.locator(this.closeCard).click();
        await this.page.locator(this.iniciarSesionBtn).first().click();
        await this.page.locator(this.user).fill(user);
        await this.page.locator(this.password).fill(password);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState("load",{timeout : 1000});
    }

    async  validateLogin(user) {
        await expect(this.page.getByTitle(user)).toBeVisible({timeout:5000});
    }
}