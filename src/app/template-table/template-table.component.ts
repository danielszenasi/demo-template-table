import {Component, Input, ContentChildren, QueryList, OnInit, AfterViewInit, AfterContentInit} from "@angular/core";
import {ColumnComponent} from "./column.component";

@Component({
  selector: 'tt-template-table',
  template: `<table class="template-table">
                <thead>
                  <tr>
                      <th *ngFor="let column of columns | hiddenfilter">
                      {{column.header}}
                      </th>
                  </tr>
                </thead>
                <tbody>
                    <tt-row style="display: table-row"
                           *ngFor="let row of rows; let i = index "
                           [row]="row"
                           [columns]="columns" 
                           [index]=i></tt-row>
                </tbody>
            </table>
            <tt-paginator *ngIf="paginator"
                    [rowsPerPage]="rowsPerPage" 
                    [first]="first"
                    [totalRecords]="totalRecords"
                    styleClass="ui-paginator"
                    (onPageChange)="paginate($event)">
            </tt-paginator>`
})

export class TemplateTableComponent {

  @ContentChildren(ColumnComponent) columns: QueryList<ColumnComponent>;

  @Input() rows: Array<any>;

  @Input() paginator: boolean = true;

  private rowsPerPage: number = 10;

  private totalRecords: number = 20

}
