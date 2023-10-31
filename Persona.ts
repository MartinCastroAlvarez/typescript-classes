export class Persona {
    private nombre: string;
    private apellido: string;
    private fechaNacimiento: Date;
    private altura: number;
    private peso: number;
    private estaVivo: boolean;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date, altura: number, peso: number, estaVivo: boolean) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.altura = altura;
        this.peso = peso;
        this.estaVivo = estaVivo;
    } 

    // Getters para obtener los atributos
    getNombre(): string {
        return this.nombre;
    }

    getApellido(): string {
        return this.apellido;
    }

    getFechaNacimiento(): Date {
        return this.fechaNacimiento;
    }

    getAltura(): number {
        return this.altura;
    }

    getPeso(): number {
        return this.peso;
    }

    getEstaVivo(): boolean {
        return this.estaVivo;
    }

    // Setter para establecer el nombre
    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

     // Setter para el apellido (lanza un error)
     setApellido(nuevoApellido: string) {
        throw new Error("No se puede modificar el atributo apellido.");
    }

    // Setter para la fecha de nacimiento (lanza un error)
    setFechaNacimiento(nuevaFecha: Date) {
        throw new Error("No se puede modificar el atributo fechaNacimiento.");
    }

    // Setter para la altura (lanza un error)
    setAltura(nuevaAltura: number) {
        throw new Error("No se puede modificar el atributo altura.");
    }

    // Setter para el peso (lanza un error)
    setPeso(nuevoPeso: number) {
        throw new Error("No se puede modificar el atributo peso.");
    }

    // Setter para si está vivo o muerto (lanza un error)
    setEstaVivo(nuevoEstado: boolean) {
        throw new Error("No se puede modificar el atributo estaVivo.");
    }
}

