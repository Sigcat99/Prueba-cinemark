import { Locator, Page } from "@playwright/test";



export class CinemarkFoodpage {
    readonly page:Page;

    private bebidas:any;
    private combos:any;
  
    constructor(page:Page) {
        this.page = page;
    

    this.bebidas ={
        'AGUA WEB': /^AGUA WEB\$5\.5000$/,
        'AGUA CON GAS WEB': /^AGUA CON GAS WEB\$5\.5000$/,
        'FUZE TEA WEB': /^FUZE TEA WEB\$5\.5000$/ ,
        
    };
    this.combos ={
        'COMBO TU Y YO WEB IP': 1,
        'COMBO KIDS WEB IP':2,
        'CRISPETA 160 GR GRATIS PRO':3
        
    };

    }

    async selectFood(tipoDeComida:string ,tipo, cantidad ) {

        await this.page.locator('a').filter({ hasText: tipoDeComida }).waitFor();
        await this.page.locator('a').filter({ hasText: tipoDeComida }).click();
        if(tipoDeComida.includes('Combos')){
            for (let index = 0; index < cantidad; index++) {
                if(tipo.includes("COMBO MIO WEB IP")){
                    await this.page.locator('#Combos').getByRole('button', { name: 'Add' }).first().click(); 
                }else{
                    await this.page.locator('#Combos').getByRole('button', { name: 'Add' }).nth(this.combos[tipo]).click(); 
                }
                
            }
        }else if(tipoDeComida.includes('Bebidas')){
            for (let index = 0; index < cantidad; index++) {

                await    this.page.locator('div').filter({ hasText: this.bebidas[tipo] }).getByRole('button').nth(2).click();

            
        }
    }
        
    await this.page.getByRole('button', { name: 'continuar' }).click({force:true});

    } 
}