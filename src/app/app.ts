import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./page/nav/nav";
import { Footer } from "./page/footer/footer";
import { Home } from "./page/home/home";
import { FormsModule } from '@angular/forms';

interface Customer{
  name:string;
  age:number;  
  address:string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, Home , FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');

   customer:Customer = {
    name:'',
    age:0,
    address:''
  }
}
 
