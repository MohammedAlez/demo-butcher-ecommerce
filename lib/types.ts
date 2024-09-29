import { type BlocksContent } from '@strapi/blocks-react-renderer';


export type CategoryType = {
    id:number,
    attributes:{
        name:string,
        image?:{
            data:{
                attributes:{
                    url:string
                    blurhash?:string
                }
            }
        }
    }
}


export type ProductType = {
    id:number,
    attributes:{
        title:string,
        description:string,
        best_seller:boolean,
        discount_price:number | null,
        pack:boolean,
        price:number,
        main_image?:{
            data:{
                id?:number,
                attributes:{
                    url:string,
                    blurhash?:string
                }
            }
        }
        images?:{
            data:{
                id?:number,
                attributes:{
                    url:string,
                    blurhash?:string
                }
            }[]
        },
        category:{
            data:CategoryType
        },
        related_products?:{
            data:ProductType[]
        },
        detailed_description:BlocksContent | null
        weigths?:{
            data:{
                attributes:{
                    value:string
                }
            }[]
        }
    }
}




export type CupponType = {
    value:string, 
    isChecked:boolean, 
    discount:undefined|number
}


export type UserInfoType = {
    first_name:string,
    last_name:string,
    company:string,
    email:string, 
    phone_number:string,
    address:string,
    note:string,
}



export type HomeSlides = {
    attributes:{
        first_title:string,
        second_title:string,
        slides:{
            image:{
                data:{
                    attributes:{
                        url:string
                    }
                }
            }
        }[]
    }
} | undefined



export type ContactInfo={
    name:string,
    email:string,
    subject:string,
    message:string,
}