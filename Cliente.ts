import { Persona } from "./persona";

export class Cliente extends Persona {
    private numeroCliente: number;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date, altura: number, peso: number, estaVivo: boolean, numeroCliente: number) {
        super(nombre, apellido, fechaNacimiento, altura, peso, estaVivo);
        this.numeroCliente = numeroCliente;
    }

    // Getter para obtener el número de cliente
    getnumeroCliente(): number {
        return this.numeroCliente;
    }

    // Setter para establecer el número de cliente
    setnumeroCliente(nuevoNumeroCliente: number) {
        this.numeroCliente = nuevoNumeroCliente;
    }
}    