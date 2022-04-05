export class Videojuego{

    private _id: number;
    private _titulo: string;
    private _compania: string;
    private _icono: string;
    private _rating: number;
   
    private static contadorId : number = 1;

    constructor(nombre : string, compania : string, rating : number, icono : string){
        this._id= Videojuego.contadorId++;;
        this._titulo=nombre;
        this._compania=compania;
        this._icono=icono;
        this._rating=rating;
    }


public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
 public get titulo(): string {
        return this._titulo;
    }
    public set nombre(value: string) {
        this._titulo = value;
    }
    public get compania(): string {
        return this._compania;
    }
    public set compania(value: string) {
        this._compania = value;
    } 

    public get icono(): string {
        return this._icono;
    }
    public set icono(value: string) {
        this._icono = value;
    }

    public get rating(): number {
        return this._rating;
    }
    public set valoracion(value: number) {
        this._rating = value;
    }
}