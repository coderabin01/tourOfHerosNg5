import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {minMaxValidator} from "../shared/forbidden-name.directive";
// import { FormBuilder, Control, ControlGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  policyTermForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ){}

  ngOnInit(){
    console.log(this.policyTermForm);
    this.policyTermForm = this.fb.group({
      termName: ['', Validators.required],
      minDuration: ['',[
        Validators.required,
        Validators.maxLength(4),
        Validators.min(1),
        // customValidation(),
        // forbiddenNameValidator(/bob/i)
        // minMaxValidator()
        ]
      ],
      maxDuration: ['',[
        Validators.required,
        Validators.maxLength(4),
        Validators.min(1),
        // customValidation(),
        ]
      ]
    }, minMaxValidator())
  }

  ngOnChange(){
    console.log('changed');
  }

  submit(value){
    console.log(value);
    console.log(this.policyTermForm);
  }

  get termName() { return  this.policyTermForm.get('termName');}
  get minDuration() { return this.policyTermForm.get('minDuration'); }
  get maxDuration() { return this.policyTermForm.get('maxDuration'); }
}
