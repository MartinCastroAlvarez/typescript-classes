import { Producto } from "./Producto";

export class Niño extends Producto{
    private edad: number;

    constructor(nombre: string, precio: number, stock: number, edad: number) {
        super(nombre, precio, stock);
        this.edad = edad;
    }

    // Getters 
    getEdad(): number {
        return this.edad;
    }
    // Setters
    setEdad(nuevaEdad: number) {
        this.edad = nuevaEdad;  
    }
}