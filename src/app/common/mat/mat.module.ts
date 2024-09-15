import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const matModules: any = [MatButtonModule, MatMenuModule, MatIconModule];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class ScossMatModule { }