import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {NouveauProduitComponent} from "./nouveau-produit/nouveau-produit.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
const routes: Routes = [
  {
    path:"produits",component:ProduitsComponent
  },
  {
      path:"nouveau-Produit",component:NouveauProduitComponent
  },
  {
    path:"",redirectTo:"/home",pathMatch:'full'
  },
  {
    path:"edit-product/:id", component:EditProductComponent
  },
  {
    path:"login" ,component:LoginComponent
  },
  {
    path:"home" , component:HomeComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
