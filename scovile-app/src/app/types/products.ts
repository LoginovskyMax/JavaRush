export type ProductType = {
   title: string,
   id: string,
   image: string,
   desc: string,
   price: number
}

export type BasketProduct = {
   totalPrice: number,
   amount: number
} & ProductType