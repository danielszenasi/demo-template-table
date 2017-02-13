import {Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {ColumnComponent} from "./column.component";

@Component({
  selector: 'tt-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<td *ngFor="let col of columns | hiddenfilter"
                  [hidden]="hidden">
                  <span *ngIf="col.template">
                      <tt-column-loader [column]="col" [rowData]="row" [rowIndex]="index + 1"></tt-column-loader>
                  </span>
                  <span *ngIf="!col.template">{{row[col.field]}}</span>
              </td>`
})
export class RowComponent {

  @Input() row: any;
  @Input() columns: Array<ColumnComponent>;
  @Input() index: number;

  private hidden: boolean = false;

  constructor(private cd: ChangeDetectorRef) {
  }

  setHidden(bol: boolean) {
    this.hidden = bol;
    this.cd.markForCheck();
  }

  getHidden(): boolean {
    return this.hidden;
  }

}
