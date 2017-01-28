import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DemoComponent} from './demo/demo.component';
import {DemoModule} from "./demo/demo.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }
