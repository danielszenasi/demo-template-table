import {Component, Input, ContentChildren, QueryList} from "@angular/core";
import {ColumnComponent} from "./column.component";

@Component({
  selector: 'tt-template-table',
  template: `<table class="template-table">
                <thead>
                  <tr>
                      <th *ngFor="let column of columns">
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
            </table>`
})

export class TemplateTableComponent {

  @ContentChildren(ColumnComponent) columns: QueryList<ColumnComponent>;

  @Input() rows: Array<any>;

}
