import { NgModule } from "@angular/core";
import { HeaderComponent } from './components/header/header.component';
import { ScossMatModule } from "./mat/mat.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [HeaderComponent],
    imports: [ScossMatModule, CommonModule]
})
export class ScossCommonModule { }