import { AbstractControl } from "@angular/forms";

export function mail(control:AbstractControl) {

if(control.value.includes('@mohith.com')){
    return null;

}else {
    return {'mail':'place use valibul mail'}
}
}