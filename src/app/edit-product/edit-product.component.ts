import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogueService} from "../services/catalogue.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-edist-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  // @ts-ignore
  public currentProduct: Product;
  // @ts-ignore
  public url: string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private catService:CatalogueService) {
  }
  ngOnInit(): void {
    // @ts-ignore
   this.url =atob(this.activatedRoute.snapshot.params.id);
    this.catService.getResource(this.url)
      .subscribe({
        next: data => {
      this.currentProduct=data
    },
      error: // @ts-ignore
    err => {
      console.log(err);
    }


  });
  }

  onUpdateProduct(value: any) {
      this.catService.updateResource(this.url,value)
        .subscribe({
        next: data => {
          alert("mise a jour effectuée avec succès");
          this.router.navigateByUrl("/produits")
        },
        error: // @ts-ignore
          err => {
            console.log(err);
          }


      });
  }
  }

