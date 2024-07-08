import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent} from './questions/questions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  { path: 'question', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
