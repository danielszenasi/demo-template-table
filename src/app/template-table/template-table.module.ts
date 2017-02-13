import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RowComponent} from "./row.component";
import {ColumnComponent} from "./column.component";
import {ColumnLoaderComponent} from "./column-loader.component";
import {TemplateTableComponent} from "./template-table.component";
import {HiddenFilterPipe} from "./pipes/hidden-filter.pipe";
import {PaginatorModule} from "../paginator/paginator.modul";

@NgModule({
  imports: [
    CommonModule, PaginatorModule
  ],
  declarations: [RowComponent, ColumnComponent, ColumnLoaderComponent, TemplateTableComponent, HiddenFilterPipe],
  exports: [ColumnComponent, TemplateTableComponent],
})
export class TemplateTableModule {
}
