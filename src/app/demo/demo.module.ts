import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoComponent} from "./demo.component";
import {TemplateTableModule} from "../template-table/template-table.module";

@NgModule({
  imports: [
    CommonModule,
    TemplateTableModule
  ],
  declarations: [DemoComponent],
  exports : [DemoComponent]
})
export class DemoModule { }
