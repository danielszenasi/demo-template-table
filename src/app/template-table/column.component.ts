import {Component, OnInit, ChangeDetectorRef, TemplateRef, ContentChild, Input} from '@angular/core';

@Component({
  selector: 'tt-column',
  template: ``
})
export class ColumnComponent {

  @Input() field: string;
  @Input() header: string;
  @Input() hidden: boolean;
  //@Input() sortable: boolean;

  @ContentChild(TemplateRef) template: TemplateRef<any>;

  constructor(private cd: ChangeDetectorRef) {
  }

  setVisible(value: boolean) {
    this.hidden = value;
    this.cd.markForCheck();
  }

}
