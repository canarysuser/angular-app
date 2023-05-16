import { Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product";
import { AuthenticationResponse } from "../admin/login-model";
import { AuthenticationService } from "../admin/authentication.service";

@Injectable({
    providedIn:'root'
})
export class ProductApiService { 

    private productUrl ="http://localhost:5042/api/products";
    private httpOptions={}; 

    constructor(
        private http:HttpClient,
        private authService: AuthenticationService
    ){
        this.httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
    }
   
    getAll() : any {
        return this.http.get<Product[]>(this.productUrl)
    }
    getDetails( productId: number) : any {
        return this.http.get<Product>(`${this.productUrl}/${productId}`);
    }
    authenticateService() {
        this.httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.authService.authenticatedUser.token
            })
        }
    }
    create(item:Product) : any { 
        this.authenticateService();
        item.productId=0;
        var itemJson = JSON.stringify(item); 
        return this.http.post(this.productUrl, itemJson, this.httpOptions)
    }
    edit(item:Product) : any { 
        this.authenticateService();
        var itemJson = JSON.stringify(item); 
        let url = `${this.productUrl}/${item.productId}`
        return this.http.put(url, itemJson, this.httpOptions)
      }
    delete(item:Product) : any { 
        this.authenticateService();
        let url = `${this.productUrl}/${item.productId}`
        return this.http.delete(url, this.httpOptions)
    }
}