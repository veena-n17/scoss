import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ContactComponent, EventsComponent, GalleryComponent, HomeComponent, ServiceComponent } from './components';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'event', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'home', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
