import { Videojuego } from "./videojuego";


export class Usuario{

    private _nombre: string;
    private _password: string;
    private _videojuegos: Videojuego[];
    
    constructor(nombre : string, password : string, videojuegos : Videojuego[]){
        this._nombre=nombre
        this._password=password
        this._videojuegos= videojuegos;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get listaV(): Videojuego[] {
            return this._videojuegos;
    }
    public set listaV(value: Videojuego[]) {
        this._videojuegos = value;
    }
}