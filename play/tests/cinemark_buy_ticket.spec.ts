import { test, expect } from '@playwright/test';
import { CinemarkLoginPAGE } from '../src/page/CinemarkLoginPage';
import { CinemarkHallPages } from '../src/page/CinemarkHallPage';
import {CinemarMoviePage } from '../src/page/CinemarkMoviePage';
import { CinemarkChairPage } from '../src/page/CinemarkChairPage';
import { CinemarkFoodpage } from '../src/page/CinemarkFoodpage';
import { CinemarkResumeBuyPage } from '../src/page/CinemarkResumeBuyPage';
import { CinemarPayInfoPage } from '../src/page/CinemarPayInfoPage';
import { CinemarkQrPage,  } from '../src/page/cinemarkQrPage';

let userEmail:string ="automationtestbc@yopmail.com";
let password:string ="Colombia2024#";
let user:string ="Sundevs QA Automation BC";
let ciudad:string ="Bogota";
let teatro:string ="Lab v5 Floresta";
let fecha:string = "16/7/2024";
let pelicula:string ="Elvis '168 Comeback Special";
let horaFuncion:string ="11:50";
let tipoDeSilla:string ="BOLETA CUPON DESCUENTO";
let cantidadDeSillas:string ="1";
let  sillas:string[] =["F20"];
let tipoDeComida:string ="Combos";
let comida:string ="COMBO KIDS WEB IP";
let cantidadDecomida:number =2;
let buyInfo = {
    tipoPersona: "Natural", 
    nombre: "Sundevs QA", 
    apellido:"Automation BC" , 
    tipoId: "Cédula de ciudadanía", 
    numeroIdentificacion:"4687974511 " , 
    ciudad: "BOGOTA D.C., BOGOTÁ", 
    direccion: "Cra 1 # 2-3", 
    numeroTelefono: "9015089974 ", 
    correo:userEmail,
    numeroTarjeta:"4093551018099251",
    tarjetaCVV:"777",
    numeroCuotas:6,
    fecha:"2025/08"

};



test.describe('Comprar tickets de cine',() =>{

test('Validar QR generado exitosamente', async ({ page }) => {

    const cinemarkLogin = new CinemarkLoginPAGE(page);
    const cinemarkTheater = new CinemarkHallPages(page);
    const cinemarkMovie = new CinemarMoviePage(page);
    const cinemarkChairPage = new CinemarkChairPage(page);
    const cinmarkFoodPage = new CinemarkFoodpage(page);
    const cinmarkResumePage = new CinemarkResumeBuyPage(page);
    const cinmarkPayinfo = new CinemarPayInfoPage(page);
    const cinemarkQrPage = new CinemarkQrPage(page);


    await test.step('realizo login en la aplicacion',async () =>{

        await cinemarkLogin.login(userEmail,password );

    });
    await test.step('valido Login exitoso',async () =>{

        await cinemarkLogin.validateLogin(user);
    
    });
    await test.step('selecciona sala de cine',async () =>{

        await cinemarkTheater.SelectHall(ciudad,teatro);

    });
    await test.step('selecciona pelicula y horario',async () =>{

        await cinemarkMovie.selecDateTime(fecha);
        await  cinemarkMovie.selectMovie(pelicula);
        await  cinemarkMovie.selectTime(horaFuncion);
        //await  cinemarkMovie.selectTime("19:00");
    });
     await test.step('sleccionar sillas',async () =>{

        await  cinemarkChairPage.selectChair(tipoDeSilla, cantidadDeSillas,sillas);

    });
    await test.step('compra food',async () =>{

        await  cinmarkFoodPage.selectFood(tipoDeComida,comida,cantidadDecomida); 

    });
    await test.step('visualizacion de el resumen de compra',async () =>{

        await cinmarkResumePage.wachtResume();

    });

    await test.step('ingresa datros y realizar compra',async () =>{

        await cinmarkPayinfo.buyWithCard(buyInfo);

    });
    await test.step('validar qr',async () =>{

        await cinemarkQrPage.validateQr();

    }); 
    
});

test.skip('validar que no hay peliculas despues de las 10 pm', async ({ page }) => {

    const cinemarkLogin = new CinemarkLoginPAGE(page);
    const cinemarkTheater = new CinemarkHallPages(page);
    const cinemarkMovie = new CinemarMoviePage(page);
    


    await test.step('realizo login en la aplicacion',async () =>{

        await cinemarkLogin.login(userEmail,password );

    });
    await test.step('valido Login exitoso',async () =>{

        await cinemarkLogin.validateLogin(user);
    
    });
    await test.step('selecciona sala de cine',async () =>{

        await cinemarkTheater.SelectHall(ciudad,teatro);

    });
    await test.step('valido mensaje de no hay peliculas disponibles ',async () =>{

        
        await  cinemarkMovie.validateMovie();

    
    });

    
});

});


