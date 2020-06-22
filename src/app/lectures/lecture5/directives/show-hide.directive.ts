import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef
} from '@angular/core';

@Directive({
  selector: '[appShowHide]'
})
export class ShowHideDirective {
  private context: boolean;
  private ifTemplateRef: TemplateRef<any>|null = null;
  private elseTemplateRef: TemplateRef<any>|null = null;

  private ifViewRef: EmbeddedViewRef<any>|null = null;
  private elseViewRef: EmbeddedViewRef<any>|null = null;
  
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
      if (!this.ifViewRef) {
        this.viewContainer.clear();
        this.elseViewRef = null;
        if (this.ifTemplateRef) {
          this.ifViewRef = this.viewContainer.createEmbeddedView(this.ifTemplateRef);
        }
      }
    } else {
      if (!this.elseViewRef) {
        this.viewContainer.clear();
        this.ifViewRef = null;
        if (this.elseTemplateRef) {
          this.elseViewRef = this.viewContainer.createEmbeddedView(this.elseTemplateRef);
        }
      }
    }
  }
}