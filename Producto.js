"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = 0;
    }
    // Getters para obtener los atributos
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.getStock = function () {
        return this.stock;
    };
    // Setter para establecer el nombre
    Producto.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    // Setter para el precio
    Producto.prototype.setPrecio = function (nuevoPrecio) {
        this.precio = nuevoPrecio;
    };
    // Setter para el stock
    Producto.prototype.setStock = function (nuevoStock) {
        this.stock = nuevoStock;
    };
    return Producto;
}());
exports.Producto = Producto;
