export type filteringOptions = {
    categories:number[],
    priceRange:{min:number,max?:number},
    search:string,
    pageSize:number,
    pageNumber:number
}