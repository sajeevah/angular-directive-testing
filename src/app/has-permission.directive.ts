import {
  Directive,
  OnInit,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  Input
} from "@angular/core";

@Directive({
  selector: "[hasPermission]"
})
export class HasPermissionDirective implements OnInit {

  @Input("hasPermission") permission: String; 

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.updateView();
  };

  private updateView(){
    console.log("hasPermision : ", this.permission);
    if(this.checkPermission()){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainer.clear();
    }
  }

  private checkPermission(): boolean{
    if(this.permission === "OK"){
      return true;
    }else{
      return false;
    }
  }

}
