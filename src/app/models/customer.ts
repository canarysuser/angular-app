export class Customer {
    constructor( 
        public customerId : string, 
        public companyName: string, 
        public contactName: string, 
        public city: string,
        public country: string
    ) {
    }
    
    toString() { 
        return `Id:${this.customerId},Name:${this.companyName}`;
    }
}
