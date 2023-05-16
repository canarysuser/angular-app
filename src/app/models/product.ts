export class Product {
    constructor( 
        public productId : number, 
        public productName: string, 
        public unitPrice: number, 
        public unitsInStock: number,
        public discontinued: boolean
    ) {
    }
    
    toString() { 
        return `Id:${this.productId},Name:${this.productName}`;
    }
}
/* Validations for Product Model: 
1. Product Name, Unit Price and Units In Stock  are required. 
2. Units In Stock cannot be less than 0 or more than 500 
3. Unit price cannot be less than 0 or more than 1000 
--> Create new Product in the ProductsApi feature 
*/
