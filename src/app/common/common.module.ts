import { NgModule } from "@angular/core";
import { HeaderComponent } from './components';
import { ScossMatModule } from "./mat/mat.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [HeaderComponent,RouterModule],
    imports: [ScossMatModule, CommonModule, RouterModule]
})
export class ScossCommonModule { }