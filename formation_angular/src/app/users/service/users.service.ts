import { Injectable } from '@angular/core';
import {UserModel} from "../model/UserModel";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import usersData from "../../data/usersData";
import data from "../../data/usersData";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }


  //GET (read)
  //POST (create)
  //DELETE (delete)
  //PUT (update) modifie l'element ou le crée si il n'existe pas
  //PATCH (modification partielle de l'objet
  //
  // on recupere les données de l'api

  getAllUsers = () : Observable<UserModel[]> => {
    //get return un objet de base, on le cast pour qu'il ai le bon typage
    return this.http.get<UserModel[]>('http://localhost:3000/users')
  }

  postUser = (user : UserModel) : void => {
    this.http.post("http://localhost:3000/users", user).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteUser(user : UserModel) : void {
    this.http.delete("http://localhost:3000/users", user)
  }
}
