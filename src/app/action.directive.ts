import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[action]'
})
export class ActionDirective implements OnInit{

  @Input('action') action: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.chechAction();
  }

  private chechAction(){
    console.log('chechAction in :', this.action);
    if(this.action != 'OK'){
      console.log('not ok');
      this.el.nativeElement.style.display = "none";
    }
  }

}
