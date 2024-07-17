import { Page, expect } from "@playwright/test";
import { Fecha } from "../utils/fecha";



export class CinemarMoviePage {
    readonly page:Page;
    private waitTitle:string;
    private movie:string;
    private golbaId:string;
    private confirmarBtn:string;
    private calendar:string;
    private calendarDate:string;

    constructor(page:Page) {
        this.page = page;
        this.movie = `//*[@class= 'jsx-747031362 section-detail__title section-detail__title--bold ' and contains(text(),"Elvis '168 Comeback Special")]`;
        this.waitTitle ="//*[@class='jsx-521427491 gallery-movies__title']";
        this.golbaId = '[id="__next"]';
        this.confirmarBtn = "//button[@title= 'CONFIRMAR']";
        this.calendar = "//div[@class = 'jsx-1662438593 week ']";
        this.calendarDate = "//div[@class = 'jsx-1662438593 week ']/div/span[@class='jsx-1662438593 week__date week__date--semi-transparent week__date--small-font']";
    }


    async selecDateTime(fecha:string){

        let fechaUsuario = fecha.split("/");
        const fechaActual = new Date();
        let diaActual = fechaActual.toLocaleDateString().split("/");
        let hora = fechaActual.getHours();
        await  this.page.waitForLoadState();
        await  this.page.waitForSelector(this.calendar);
        await  this.page.locator(this.calendar).scrollIntoViewIfNeeded();
        for (let index = 0; index < 7; index++) {
            if (index == 0) {
                let dia = await (await this.page.locator(this.calendarDate).first().innerText()).split(" ");
                if(dia[0].includes(diaActual[0]) && fechaUsuario[0].includes(diaActual[0]) ){
                    if (hora > 22) {
                        await this.page.locator(this.calendarDate).nth(index+1).click();
                        break;
                    }else{
                        await this.page.locator(this.calendarDate).first().click()
                        break;
                    }
                }
            }else{
                let dia = await (await this.page.locator(this.calendarDate).nth(index).innerText()).split(" ");
                
                if(dia[0].includes(fechaUsuario[0]) && index < 8){
                    if (hora > 22) {
                        await this.page.locator(this.calendarDate).nth(index+1).click();
                        break;
                    }else{
                        await this.page.locator(this.calendarDate).nth(index).click();
                        break;
                    }
                }
        }
        
    }
        await  this.page.waitForLoadState();
    }

    async  selectMovie(movie:string) {
        
        await  this.page.waitForSelector(this.waitTitle);
        await this.page.mouse.wheel(0,600);
        await this.page.getByRole('heading', { name: movie }).last().scrollIntoViewIfNeeded();
    }

    async selectTime(hora:string){
        await this.page.locator(this.golbaId).getByText(hora).click();
        await this.page.locator(this.confirmarBtn).click();
        await  this.page.waitForLoadState();
    }
    async validateMovie(){
        await  this.page.waitForLoadState();
        await  this.page.waitForSelector(this.calendar);
        await expect(this.page.getByRole('heading', { name: 'no hay películas disponibles' })).toBeVisible({timeout:10000});
    }
}