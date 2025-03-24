import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GroupsComponent } from './groups/groups.component';
import { TrainingComponent } from './training/training.component';
import { MenuComponent } from './menu/menu.component';
import {AppModule} from "../app.module";
import {RouterLink, RouterLinkWithHref} from "@angular/router";
import { UnissmaComponent } from './unissma/unissma.component';
import { LalaComponent } from './lala/lala.component';
import { LineaComponent } from './linea/linea.component';
import { GthComponent } from './gth/gth.component';
import { AcreditacionComponent } from './acreditacion/acreditacion.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        AppModule,
        RouterLinkWithHref,
        RouterLink,
    ],
    exports: [
        TrainingComponent,
        MenuComponent
    ],
    declarations: [
        GroupsComponent,
        MenuComponent,
        TrainingComponent,
        UnissmaComponent,
        LalaComponent,
        LineaComponent,
        GthComponent,
        AcreditacionComponent
    ]
})
export class SectionsModule { }
