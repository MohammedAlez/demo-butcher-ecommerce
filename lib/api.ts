
import { useMutation, useQuery } from "react-query";
import { API_URL, STRAPI_API_TOKEN } from "../utils"; 
import { CartItemState } from "@/state/Cart/cartSlice";
import { ContactInfo, UserInfoType } from "./types";

const headers = {
    'Authorization':'bearer '+STRAPI_API_TOKEN,
    'Content-Type':'application/json'
}


// get Categories
const fetchCategories = async(isPopulate:boolean)=>{
    const res = await fetch(API_URL+`/categories${isPopulate?'?populate=*':''}`,{
        headers
    })
    if(!res.ok)
        throw new Error('Network resonse was not ok');

    const data = await res.json();

    return data;
}

export const useCategories = (isPopulate:boolean)=>{
    return useQuery({
        queryFn:()=>fetchCategories(isPopulate),
        queryKey:['categories']
    })
}



// Get Products
const fetchProducts=async(queries:string)=>{
    

    const res = await fetch(API_URL+'/products?populate[0]=main_image'+queries,{
        headers
    })
    if(!res.ok)
        throw new Error('Network response was not ok');

    const data = await res.json();

    return data;
}


type OptionsType = {
    filteringOptions?:{
        priceRange?:{min:number, max?:number},
        categories?:number[], 
        search:string,
        pageSize?:number
        pageNumber?:number
    }
    related_products_id?:number,
    best_seller?:true,
    pack?:boolean
}
const query=(options:OptionsType)=>{
    const {filteringOptions, related_products_id, best_seller, pack} = options
    // console.log(filteringOptions)
    let queries = ''
    if(filteringOptions?.categories && filteringOptions?.priceRange){
        const categoriesFilter = filteringOptions?.categories.length ? `${filteringOptions?.categories.map((id,i,a)=>`&filters[$or][${i}][category][id][$eq]=${id}`).join('')}` : ''
        const priceFilter = `&filters[price][$gte]=${filteringOptions?.priceRange.min}${filteringOptions?.priceRange.max?`&filters[price][$lte]=${filteringOptions?.priceRange.max}`:''}`
        queries = categoriesFilter + priceFilter + '&pagination[withCount]=true'

    }else if(related_products_id){
        queries = `&filters[related_products][id][$eq]=${related_products_id}`
    }else if(best_seller){
        queries = `&filters[best_seller][$eq]=true`
    }else if(pack){
        queries = `&filters[pack][$eq]=true&populate=category`
    }

    if(filteringOptions?.search.length){
        queries+= `&filters[title][$containsi]=${filteringOptions?.search}`
        // queries+= `&filters[$or][0][title][$containsi]=${search}&filters[$or][1][description][$containsi]=${search}`
    }

    if(filteringOptions?.pageSize){
        queries+= `&pagination[pageSize]=${filteringOptions?.pageSize}`
    }

    if(filteringOptions?.pageNumber){
        queries+= `&pagination[page]=${filteringOptions?.pageNumber}`
    }

    // console.log(queries)

    return queries
}

export const useProducts = (options:OptionsType)=>{
    return useQuery({
        queryFn:()=>fetchProducts(query({...options})),
        queryKey:['products',options],
    })
}

// get Product by slug

const fetchProduct=async(slug:string)=>{
    // console.log(`filters[title][$eq]=${slug}`)
    const res = await fetch(API_URL+`/products?populate[0]=main_image&populate[1]=images&populate[2]=category&populate[3]=weigths&filters[title][$eq]=${slug}`,{
        headers
    })
    if(!res.ok)
        throw new Error('Netwrok response was not ok');

    const data = await res.json();

    return data
}

export const useProduct=(slug:string)=>{

    return useQuery({
        queryFn:()=>fetchProduct(slug),
        queryKey:['product']
    })
}


// place order
const placeOrder = async ({cart, userInfo, total_price}:{cart: CartItemState[], userInfo:UserInfoType, total_price:number}) => {

        // Place the order
        let additionalInfo:any = {};
        if(userInfo.note.length)
            additionalInfo.note = userInfo.note
        if(userInfo.company.length)
            additionalInfo.company = userInfo.company

        const orderResponse = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            data: {
            total_price,
            full_name: userInfo.first_name + ' ' +  userInfo.last_name,
            email: userInfo.email,
            phone_number: userInfo.phone_number,
            address: userInfo.address,
            note:userInfo.note,
            company:userInfo.company,
            items:cart.map(item=>({
                quantity:item.quantity,
                weigth:item.weigth || '',
                product:item.id 
            }))
            }
        })
        });

        if (!orderResponse.ok) {
        throw new Error('Failed to place the order');
        }

        const orderData = await orderResponse.json();
        // console.log(orderData.data.id);
        // console.log(orderData);

        
    
        return orderData
    
};

export const usePlaceOrder=()=>{
    return useMutation(placeOrder);
}




// cuppons

const checkCoupon=async(value:string)=>{
    const res = await fetch(API_URL+`/cuppons?filters[value][$eqi]=${value}`,{
        headers
    })

    if(!res.ok){
        throw new Error("Error getting the cuppon");
    }

    const data = await res.json();
    
    return data
}

export const useCheckCoupon = () => {
    return useMutation(checkCoupon);
};




export const getHomeSlides=async()=>{
    try{
        // console.log(API_URL+`/home-page-slide?populate=*`);
        const res = await fetch(API_URL+`/home-page-slide?populate[slides][populate]=image`,{
            headers
        })
    
        if(!res.ok){
            throw new Error('failed to fetch home page slides')
        }
        const data = await res.json();
        return data;

    }catch(e){
        console.log(e);
    }


}



export const useHomeSlides=()=>{

    return useQuery({
        queryKey:'home-slides',
        queryFn:getHomeSlides,
    })
}


const submitContactForm=async(contactInfo:ContactInfo)=>{

    const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactInfo),
      });
  
      if (!res.ok) {
        throw new Error('email has not been sent')
      }

      const data = await res.json();

      return data;

}

export const useContactForm =()=>{

    return useMutation(submitContactForm)
}