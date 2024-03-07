import {
  Directive,
  Input,
  OnChanges,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructuralDirective]',
  exportAs: 'MyStructuralDirectiveDirective',
})
export class MyStructuralDirectiveDirective implements OnChanges {
  @Input() appMyStructuralDirective: boolean = false;
  @Input() myTmpProp: any;
  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const template = this.templateRef || this.myTmpProp;
    if (!template) {
      return;
    }
    if (this.appMyStructuralDirective) {
      // shows the element if true
      this.vcRef.createEmbeddedView(template, {
        fromDirective: 'value form ngOnChanges 123',
      });
    } else {
      this.vcRef.clear();
    }
  }
}
