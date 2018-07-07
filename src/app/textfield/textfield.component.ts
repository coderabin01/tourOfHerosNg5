import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {
  @Input() labelName: string;
  @Input() optional: boolean;
  // @Input() fg:string;
  // @Input() fcn:string;
  fg: FormGroup
  constructor() { }
  ngOnInit() {
    console.log(this.fg);

    this.fg = new FormGroup({
      fcn: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
    });
  }
  get fcn() { return this.fg.get('fcn'); }
}
