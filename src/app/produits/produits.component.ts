import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CatalogueService} from "../services/catalogue.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  //creation d'un attribut (List) ou on stocke les donnes returnes (obj) sous forme des data
  // on precise par la suite dans la table html on laffiche que sise t seuleemnt si produits=!undifined
  public produits: any;
  public size=5;
  public currentPage:number=0;
  public totalPages:number=0;
  // @ts-ignore
  public pages:Array<number>;


  // le http maintennt est devenue un composant
  // ici on va injecter le service tout entier dans le constructeur pour qu'il soit bien un objet privé
  // @ts-ignore
  public form: number;
  public currentKeyword: String="";

  constructor(private catService:CatalogueService, private router:Router) {
  }

  ngOnInit(): void {
    // la methode qui s'éxécute une fois que le composant est chrgée
  }

  onGetProduits() {
    this.catService.getProduits(this.currentPage,this.size)
     // cette maniere est vrement statique this.httpClient.get("http://localhost:8080/produits")
      // les services sont faites pour faire tous les interactions avec la partie backend
      .subscribe(
        {
          next: data=> {

            // @ts-ignore
            this.totalPages=data["page"].totalPages;
            this.pages=new Array<number>(this.totalPages);
            this.produits=data;
            },
          error: err => {
            console.log(err);
            }
        }
      );
  }

  onPageProduct(i: number) {
    this.currentPage = i;
    this.chercherProduits();



}

  chercherProduits() {
    this.catService.getProduitsByKeyword(this.currentKeyword,this.currentPage,this.size)
      // cette maniere est vrement statique this.httpClient.get("http://localhost:8080/produits")
      // les services sont faites pour faire tous les interactions avec la partie backend
      .subscribe(
        {
          next: data=> {

            // @ts-ignore
            this.totalPages=data["page"].totalPages;
            this.pages=new Array<number>(this.totalPages);
            this.produits=data;
          },
          error: err => {
            console.log(err);
          }
        }
      );
  }

  onChercher(value: any) {
    this.currentPage=0;
    this.currentKeyword=value.keyword;
    this.chercherProduits();
  }

  onDeleteProduit(p: any) {
    let conf = confirm("etes vous sure?");
    if (conf) {
      this.catService.deleteRessource(p._links.self.href).subscribe({
        next: data => {
          this.chercherProduits();

        },
        error: err => {
          console.log(err);
        }


      });
    }
  }

  onEditProduit(p: any) {
    let url =p._links.self.href;
    this.router.navigateByUrl("/edit-product/"+btoa(url) );

  }
}
// *  data=>{
// *   this.produits=data;
// * },err=>{
// *  console.log(err);
// * })
