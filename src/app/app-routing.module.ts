import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {IntersectionTwoPlanesComponent} from "./dashboard/intersection-two-planes/intersection-two-planes.component";
import {IntersectionPlaneAndLineComponent} from "./dashboard/intersection-plane-and-line/intersection-plane-and-line.component";
import {LineBetweenTwoPointsComponent} from "./dashboard/line-between-two-points/line-between-two-points.component";


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'intersection-planes', component: IntersectionTwoPlanesComponent},
  {path: 'intersection-plane-and-line' , component: IntersectionPlaneAndLineComponent},
  {path: 'line-between-two-points' , component: LineBetweenTwoPointsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}