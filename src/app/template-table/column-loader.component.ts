import {Component, OnInit, Input, ViewContainerRef} from '@angular/core';
import {ColumnComponent} from "./column.component";

@Component({
  selector: 'tt-column-loader',
  template: ``,
})
export class ColumnLoaderComponent {

  @Input() column: ColumnComponent;

  @Input() rowData: any;

  @Input() rowIndex: number;

  constructor(public viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.column.template, {
      '\$implicit': this.column,
      'row': this.rowData,
      'rowIndex': this.rowIndex,
    });
  }

}
