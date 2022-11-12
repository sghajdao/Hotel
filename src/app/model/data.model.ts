export interface Rooms{
    id:number,
    pic:string,
    type:string,
    price:string,
    description:string,
    space:string
    shower:boolean,
    phone:boolean,
    wifi:boolean,
    tv:boolean,
    glass:boolean,
    cutlery:boolean
}

export  interface Customers{
    check_in:Date,
    check_out:Date,
    adults:number;
    kids:number
}