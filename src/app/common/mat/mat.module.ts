import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const matModules: any = [MatButtonModule, MatMenuModule];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class ScossMatModule { }