import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.css']
})
export class NouveauProduitComponent implements OnInit {
  // @ts-ignore
  public currentProduct: Product;
  public mode: number=1;
      constructor(private catService:CatalogueService, private router:Router) {
      }
      ngOnInit(){

      }
  onSaveProduct(data: any) {
        // les donnes ici venus en format json
        // @ts-ignore
    this.catService.saveRessource(this.catService.host+"/produits",data)
      .subscribe(
        {
          next: res=> {
           // this.router.navigateByUrl("/produits");
            this.currentProduct=res;
            this.mode=2;
          },
          error: err => {
            console.log(err);
          }
        }
      );
  }

  onNewProduct() {
    this.mode=1;
  }
}
