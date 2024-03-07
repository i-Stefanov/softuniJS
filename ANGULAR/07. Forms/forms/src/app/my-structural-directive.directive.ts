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
})
export class MyStructuralDirectiveDirective implements OnChanges {
  @Input() appMyStructuralDirective: boolean = false;
  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appMyStructuralDirective) {
      // shows the element if true
      this.vcRef.createEmbeddedView(this.templateRef, {
        fromDirective: 'value form ngOnChanges 123',
      });
    } else {
      this.vcRef.clear();
    }
  }
}
