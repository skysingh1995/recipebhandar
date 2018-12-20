import { Component, OnInit } from '@angular/core';
import {RecipedataService} from '../../services/recipedata.service';
import {Router} from '@angular/router';
import {NavbarComponent} from '../../navbar/navbar/navbar.component';

@Component({
  selector: 'app-viewrecipelist',
  templateUrl: './viewrecipelist.component.html',
  styleUrls: ['./viewrecipelist.component.css']
})
export class ViewrecipelistComponent implements OnInit {


  constructor(private data: RecipedataService, private route: Router) { }
  finaldata;
  ngOnInit() {

    const data = this.data.recipedata();
    console.log('home', data.recipes);
    this.finaldata = data.recipes;
    localStorage.setItem('prefixed-data', JSON.stringify( this.finaldata));
  }
  view(data, index) {
    this.route.navigate(['/view/', index]);
  }
  edit(data, index) {
    this.route.navigate(['/add/', index]);
  }
  delete(data, index) {
    alert(index);
    //this.route.navigate(['/add/', index]);
  }
}
