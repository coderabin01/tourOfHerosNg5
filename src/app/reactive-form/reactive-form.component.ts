import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { Heroo } from '../hero';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  @Input() hero: Heroo;
  heroForm: FormGroup;

  ngOnInit() {
    this.heroForm = new FormGroup({
      'username': new FormControl(this.hero.username, [Validators.required, Validators.minLength(4)]),
      // password: new FormControl()
    });
  }

  // constructor(private fb : FormBuilder) {
  //   this.createForm();
  // }
  //
  // createForm() {
  //   this.heroForm = this.fb.group({
  //     username: '',
  //     password: ''
  //   });
  // }
}
