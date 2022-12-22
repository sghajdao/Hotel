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

export interface Account{
    id:number,
    username:string,
    email:string,
    password:string,
    password2:string
}

export  interface Customers{
    check_in:Date,
    check_out:Date,
    adults:number,
    kids:number
}