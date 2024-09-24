import { NgModule } from "@angular/core";
import { HeaderComponent, EventComponent } from './components';
import { ScossMatModule } from "./mat/mat.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponent,
        EventComponent
    ],
    exports: [HeaderComponent, RouterModule, EventComponent],
    imports: [ScossMatModule, CommonModule, RouterModule]
})
export class ScossCommonModule { }