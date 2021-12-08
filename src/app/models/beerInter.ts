export interface IBeer {
    id: number;
    name: string;
    type: Size;
    price: number;

}

 export enum Size {
    small = "small",
    medium ="medium"
}