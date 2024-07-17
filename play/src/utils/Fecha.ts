export class Fecha {
    private date:Date;
    private fechaUsuario:Date;
    constructor(fecha:string) {
        this.date = new Date();
        this.fechaUsuario = new Date(fecha);
    }

    private getTime(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    async processDate() {
        
        let fechaActual = this.getTime(this.date);
        let fechaIngresada = this.getTime(this.fechaUsuario);
        if (fechaActual.getTime() ===  fechaIngresada.getTime()) {
            if((this.date.getHours() + 1) > 22 ){
                
            }
        }
    }
   
}
    
