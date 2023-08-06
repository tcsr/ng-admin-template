import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MyChildComponent } from './components/my-child/my-child.component';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import {ScrollTopModule} from 'primeng/scrolltop';


@NgModule({
  declarations: [
    AppComponent,
    MyChildComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    CheckboxModule,
    TabViewModule,
    InputTextModule,
    RadioButtonModule,
    FileUploadModule,
    HttpClientModule,
    ButtonModule,
    PanelMenuModule,
    ScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
