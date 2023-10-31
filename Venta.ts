import { Cliente } from "./Cliente";
import { Producto } from "./Producto";

export class Venta{
    private cantidad: number;
    private fecha: Date;
    private cliente: Cliente;
    private producto: Producto;

    constructor(cantidad: number, fecha: Date, cliente: Cliente, producto: Producto){
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.cliente = cliente;
        this.producto = producto;
    }

    // Getters
    getCantidad(): number{
        return this.cantidad;
    }

    getFecha(): Date{
        return this.fecha;
    }

    getCliente(): Cliente{
        return this.cliente;
    }

    getProducto(): Producto{
        return this.producto;
    }

    // Setter
    setCantidad(nuevaCantidad: number): void{
        this.cantidad = nuevaCantidad;
    }

    setFecha(nuevaFecha: Date): void{
        this.fecha = nuevaFecha;
    }

    setCliente(nuevoCliente: Cliente): void{
        this.cliente = nuevoCliente;
    }

    setProducto(nuevoProducto: Producto): void{
        this.producto = nuevoProducto;
    }
}