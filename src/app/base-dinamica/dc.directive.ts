import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDc]'
})
export class DcDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}