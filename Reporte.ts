import { Venta } from "./Venta";

export class Reporte {
    private ventas: Venta[];

    constructor() {
        this.ventas = [];
    } 

    // Getters para obtener los atributos
    getVentas(): Venta[] {
        return this.ventas;
    }

    // Setter para las ventas
    setVentas(nuevasVentas: Venta[]) {
        this.ventas = nuevasVentas;
    }

    // Setter para agregar un Venta sin eliminar los anteriores
    agregarVentas(nuevasVentas: Venta): void {
        if (this.ventas.indexOf(nuevasVentas) !== -1 ){
            return
        } else {
            this.ventas.push(nuevasVentas);
        }
    }

    // Setter para agregar una Venta al principio del array
    agregarVentasAlPrincipio(nuevasVentas: Venta): void {
        if (this.ventas.indexOf(nuevasVentas) !== -1 ){
            return
        } else {
        this.ventas.unshift(nuevasVentas);
        }
    }

    // Setter para borrar el último Venta del array
    borrarUltimaVenta(): void {
        this.ventas.pop();
    }

    // Setter para borrar el primer Venta del array
    borrarPrimerVenta(): void {
        this.ventas.shift();
    }
}

