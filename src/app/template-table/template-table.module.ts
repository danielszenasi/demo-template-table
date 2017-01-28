import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RowComponent} from "./row.component";
import {ColumnComponent} from "./column.component";
import {ColumnLoaderComponent} from "./column-loader.component";
import {TemplateTableComponent} from "./template-table.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RowComponent, ColumnComponent, ColumnLoaderComponent, TemplateTableComponent],
  exports: [ColumnComponent, TemplateTableComponent],
})
export class TemplateTableModule {
}
