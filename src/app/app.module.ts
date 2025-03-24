import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {InvestigacionComponent} from "./sections/investigacion/investigacion.component";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        InvestigacionComponent,

    ],
    exports: [
        FooterComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule
    ],
    providers: []
})
export class AppModule { }
