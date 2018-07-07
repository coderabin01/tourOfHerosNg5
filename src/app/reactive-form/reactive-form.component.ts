import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
// import { Heroo } from '../hero';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // hero = {username: 'Mr', password: 'abcd'};
  heroForm: FormGroup;
  formGroupName: FormGroup;
  ngOnInit() {
    // this.formGroupName = "rabinForm"
    this.heroForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'password': new FormControl('', [])
    });
    // this.isInvalid(formType);
  }
 // isInvalid(formType){
 //    console.log("invalid");
 //    this.heroForm = new FormGroup({
 //      formType: new FormControl('',[
 //        Validators.required,
 //        Validators.minLength(4)
 //      ])
 //    });
 // }

  get username() { return this.heroForm.get('username'); }
}


/* tslint:disable: member-ordering forin */
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
//
// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css']
// })
// export class ReactiveFormComponent implements OnInit {
//
//   powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
//
//   hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
//
//   heroForm: FormGroup;
//
//   ngOnInit(): void {
//     this.heroForm = new FormGroup({
//       'username': new FormControl(this.hero.name, [
//         Validators.required,
//         Validators.minLength(4),
//         forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
//       ]),
//       'alterEgo': new FormControl(this.hero.alterEgo),
//       'power': new FormControl(this.hero.power, Validators.required)
//     });
//   }
//
//   get name() { return this.heroForm.get('username'); }
//
// }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
