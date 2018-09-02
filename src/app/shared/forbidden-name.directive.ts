// ** This is for template driven form *

import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  // console.log(nameRe);
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    // console.log(forbidden);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

export function minMaxValidator(): ValidatorFn {
  return (control: AbstractControl): {[key:string]: any} => {
    const minDuration = control.value.minDuration;
    console.log(minDuration);
    const maxDuration = control.value.maxDuration;
    console.log(minDuration , maxDuration);
    if (parseInt(minDuration) > parseInt(maxDuration)){
      console.log('min is greater');
      return { 'minMaxValidation': {value: true}};
    }
    else{
      return null;
    }
  }
  // return (group: FormGroup) => {
  //   if (group.controls[value1].value !==  group.controls[value2].value) {
  //     return group.controls[value2].setErrors({notEquivalent: true})
  //   }
  // }
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} {
    console.log("hello");
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
      : null;
  }
}
