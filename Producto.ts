export class Producto {
    private nombre: string;
    private precio: number;
    private stock: number;

    constructor(nombre: string, precio: number, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
 

    // Getters para obtener los atributos
    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    getStock(): number {
        return this.stock;
    }

    // Setter para establecer el nombre
    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    // Setter para el precio
    setPrecio(nuevoPrecio: number) {
        this.precio = nuevoPrecio;
    }

    // Setter para el stock
    setStock(nuevoStock: number) {
        this.stock = nuevoStock;
    }
}
