import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UsersService} from "../../service/users.service";
import {UserModel} from "../../model/UserModel";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  check : boolean = true

  userForm = this.fb.group({
    nom : ['', [Validators.required, Validators.minLength(2)]],
    prenom : ['', [Validators.maxLength(20)]],
    dateDeNaissance :['', [Validators.required]],
    email : ['', [Validators.email, Validators.required]]
  })

  @Output()
  dataUser = new EventEmitter<UserModel>()

  constructor(private fb : FormBuilder, private service : UsersService) {

  }

  ngOnInit(): void {
  }

  submit = () => {
    if(this.userForm.valid){
      let user = Object.assign(new UserModel(), this.userForm.value);
      this.dataUser.emit(user);
      this.check = true;
      this.userForm.reset()
      console.log("ok")
    }else{
      this.check = false
    }
    console.log(this.userForm);
  }

}
