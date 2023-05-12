import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";
// un service est fait pour etre ingectee dans les composants
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:String="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }
  // le resultat reourne de cete methode est sous la forme d'un objet observable don if faut l'indiquer comme un type de retour
  public getProduits(page:number,size:number){
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }
  public getProduitsByKeyword(mc:String,page:number,size:number){
    return this.httpClient.get(this.host+"/produits/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }
  // @ts-ignore
  public deleteRessource(url){
    return this.httpClient.delete(url);
  }

  // @ts-ignore
  public saveRessource(url,data):Observable<Product>{
    // @ts-ignore
    return this.httpClient.post<Product>(url,data);
  }

  // @ts-ignore
  public getResource(url):Observable<Product>{
    // @ts-ignore
    return this.httpClient.get<Product>(url);

  }

  // @ts-ignore
  public updateResource(url,data){

    return this.httpClient.put(url,data);

  }

}
