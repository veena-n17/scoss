import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const matModules: any = [
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule,
    MatCardModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class ScossMatModule { }