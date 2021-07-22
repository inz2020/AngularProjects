import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  //C'est l'objet formulaire qui correspndra au formulaire dans le template
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  //creation de l'objet formGroup qui correspondra au formulaire dans le template avec les differentes formes controles(firstname, lastname,...)
  initForm(){
    //Integer la validation en utilisant les validators
    this.userForm=this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required]
      //Parmettre à l'user d'ajouter ses hobbies de manière dynamique
      ,  hobbies:this.formBuilder.array([])
    });
  }

  onSubmitForm() {
    const formValue= this.userForm.value;
    const newUser= new UserModel(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies'] ? formValue['hobbies']:[]
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
  //Une methode getHobbies permettant de retourner les hobbies sous formes de array
  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }
  //Methode pour ajouter hobbies

  onAddHobby(){
    const  newHobbyControl= this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobbyControl);
  }



}
