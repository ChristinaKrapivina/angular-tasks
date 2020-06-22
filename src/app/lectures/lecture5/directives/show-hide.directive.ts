import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appShowHide]'
})
export class ShowHideDirective {
  private context: boolean;
  private ifTemplateRef: TemplateRef<any>|null = null;
  private elseTemplateRef: TemplateRef<any>|null = null;
  
  constructor(
    private viewContainer: ViewContainerRef, 
    templateRef: TemplateRef<any>
  ) {
    this.ifTemplateRef = templateRef;
  }

  @Input()
  set appShowHide(condition: boolean) {
    this.context = condition;
    this.updateView();
  }
  @Input()
  set appShowHideElse(templateRef:TemplateRef<any>|null) {
    this.elseTemplateRef = templateRef;
    this.updateView();
  }

  updateView() {
    if (this.context) {
        this.viewContainer.clear();
        if (this.ifTemplateRef) {
          this.viewContainer.createEmbeddedView(this.ifTemplateRef);
        }
      } else {
        this.viewContainer.clear();
        if (this.elseTemplateRef) {
          this.viewContainer.createEmbeddedView(this.elseTemplateRef);
        }
      }
  }
}