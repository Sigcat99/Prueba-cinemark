import { Page, expect } from "@playwright/test";



export class CinemarkHallPages {
    
    readonly page:Page;
    private teartrosBtn:string;
    private modalCity:string;
    private selectCity:string;
    private city:string;
    constructor(page:Page) {
        this.page = page;
        this.teartrosBtn="(//*[contains(text(),'teatros')])[3]";
        this.modalCity ="//*[@class = 'ant-modal-body']";
        this.selectCity ="//*[@class = 'ant-select ant-select-enabled']";
        this.city = `//*[contains(text(),'Bogota')and @role = 'option']`
        
    }

    async  SelectHall(ciudad:string , teatro:string) {

    await this.page.locator(this.teartrosBtn).click();
    await this.page.waitForLoadState("load",{timeout:5000});
    await  this.page.waitForSelector(this.modalCity,{timeout:5000});

    await this.page.locator(this.selectCity).click({timeout:5000});  
    await this.page.locator(`//*[contains(text(),'${ciudad}')and @role = 'option']`).click({timeout:5000});  
    await this.page.waitForLoadState("load",{timeout:5000});
    await this.page.waitForSelector(`//h4[@class='jsx-1888839660 theater-item__title text--uppercase' and contains(text(),'${teatro}')]/following-sibling::div[@class='jsx-1888839660 theater-item__footer']/a`,{timeout:9000});
    await this.page.locator(`//h4[@class='jsx-1888839660 theater-item__title text--uppercase' and contains(text(),'${teatro}')]/following-sibling::div[@class='jsx-1888839660 theater-item__footer']/a`).click({timeout:5000});
    await this.page.waitForLoadState("load");
    }
}