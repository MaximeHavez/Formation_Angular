import { Component, OnInit } from '@angular/core';
import {DemoModel} from "../model/demomodel";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public message : string = 'message provenant du ts';
  public id : number = 45;
  public img : string = "https://i.ytimg.com/vi/0R_yqaqBmy8/hqdefault.jpg"
  public nombre : number = 0;
  public check : boolean = true;
  public date : string = new Date().toUTCString();
  public table : DemoModel[] = [new DemoModel("Dupont", "Gerard", "25-01-1955"),
                                new DemoModel("Némart", "Jean", "01/07/1970"),
                                new DemoModel("Bon", "Jean", "25-10-1957")];

  constructor() { }

  //hook qui se lance à la creation du composant
  ngOnInit(): void {
    console.log('le composant se crée')
  }

  displayMessage(e : any) {
    console.log(e)
  }

  newNumber(valeur : any):void {
    // on veut récupérer la nouvelle valeur de nombre
    console.log(valeur.value)
  }

  changeColor() : void {
    this.check = !this.check;
  }



}
