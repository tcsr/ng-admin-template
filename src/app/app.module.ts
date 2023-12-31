import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { ScrollTopModule } from 'primeng/scrolltop';
import { RippleModule } from 'primeng/ripple';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { initializeKeycloak } from '../app/init/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppLayoutModule } from './layout/app.layout.module';


@NgModule({
  declarations: [
    AppComponent,
    MyChildComponent,
    InputNumberComponent,
    OperatorsComponent,
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
    ScrollTopModule,
    ButtonModule,
    RippleModule,
    AutoCompleteModule,
    OverlayPanelModule,
    AutoFocusModule,
    InputNumberModule,
    ToastModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    AppLayoutModule
  ],
  providers: [
    // KeycloakService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
