import { Component } from '@angular/core';

interface Produit {
  id: number;
  nom: string;
  prix: string;
  image: string;
  categorie: string;
  genre: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ongletActif: string = 'Tous';

  onglets = ['Tous','Vêtements','Chaussures','Montres','Hommes','Femmes'];

  produits: Produit[] = [
    {id:1, nom:'Chaussure cuir noir', prix:'120$', image:'https://images.unsplash.com/photo-1549298916-b41d501d3772', categorie:'Chaussures', genre:'Hommes'},
    {id:2, nom:'Basket blanc premium', prix:'95$', image:'https://images.unsplash.com/photo-1528701800489-20be3c3d2f03', categorie:'Chaussures', genre:'Hommes'},
    {id:3, nom:'Costume africain bleu', prix:'150$', image:'https://images.unsplash.com/photo-1593032465171-8c1e9cfa6f7a', categorie:'Vêtements', genre:'Hommes'},
    {id:4, nom:'Costume africain or', prix:'170$', image:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf', categorie:'Vêtements', genre:'Hommes'},
    {id:5, nom:'Montre élégante cuir', prix:'80$', image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30', categorie:'Montres', genre:'Hommes'},
    {id:6, nom:'Montre luxe or', prix:'210$', image:'https://images.unsplash.com/photo-1519741497674-611481863552', categorie:'Montres', genre:'Femmes'},
    {id:7, nom:'Chaussure femme rouge', prix:'110$', image:'https://images.unsplash.com/photo-1514986888952-8cd320577b68', categorie:'Chaussures', genre:'Femmes'},
    {id:8, nom:'Escarpin noir', prix:'105$', image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d', categorie:'Chaussures', genre:'Femmes'},
    {id:9, nom:'Robe africaine wax', prix:'130$', image:'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03', categorie:'Vêtements', genre:'Femmes'},
    {id:10, nom:'Robe africaine moderne', prix:'140$', image:'https://images.unsplash.com/photo-1520975916090-3105956dac38', categorie:'Vêtements', genre:'Femmes'},
    {id:11, nom:'Chaussure sport pro', prix:'115$', image:'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111', categorie:'Chaussures', genre:'Hommes'},
    {id:12, nom:'Chaussure ville luxe', prix:'160$', image:'https://images.unsplash.com/photo-1533867617858-e7b97e060509', categorie:'Chaussures', genre:'Hommes'},
    {id:13, nom:'Costume africain blanc', prix:'175$', image:'https://images.unsplash.com/photo-1520975661595-6453be3f7070', categorie:'Vêtements', genre:'Hommes'},
    {id:14, nom:'Costume africain royal', prix:'190$', image:'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc', categorie:'Vêtements', genre:'Hommes'},
    {id:15, nom:'Montre minimaliste', prix:'70$', image:'https://images.unsplash.com/photo-1508057198894-247b23fe5ade', categorie:'Montres', genre:'Hommes'},
    {id:16, nom:'Montre femme chic', prix:'85$', image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314', categorie:'Montres', genre:'Femmes'},
    {id:17, nom:'Sandale femme cuir', prix:'65$', image:'https://images.unsplash.com/photo-1603808033192-082d6919d3e1', categorie:'Chaussures', genre:'Femmes'},
    {id:18, nom:'Basket femme mode', prix:'90$', image:'https://images.unsplash.com/photo-1552346154-21d32810aba3', categorie:'Chaussures', genre:'Femmes'},
    {id:19, nom:'Boubou africain luxe', prix:'200$', image:'https://images.unsplash.com/photo-1617957743098-9d66c64c3f38', categorie:'Vêtements', genre:'Hommes'},
    {id:20, nom:'Ensemble africain femme', prix:'155$', image:'https://images.unsplash.com/photo-1594633313593-bab3825d0caf', categorie:'Vêtements', genre:'Femmes'},
  ];

  get produitsFiltres() {
    if(this.ongletActif === 'Tous') return this.produits;

    if(this.ongletActif === 'Hommes' || this.ongletActif === 'Femmes'){
      return this.produits.filter(p => p.genre === this.ongletActif);
    }

    return this.produits.filter(p => p.categorie === this.ongletActif);
  }

  changerOnglet(o:string){
    this.ongletActif = o;
  }

}