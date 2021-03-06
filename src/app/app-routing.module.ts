import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ReactiveFormComponent} from './reactive-form/reactive-form.component';
import { RegisterComponent} from './register/register.component';
import { DirectivesComponent} from './directives/directives.component';
import {CustomReactiveValidationComponent} from "./custom-reactive-validation/custom-reactive-validation.component";
import {FormBuilderComponent} from "./form-builder/form-builder.component";
import {ImageUploadComponent} from "./image-upload/image-upload.component"

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'directive', component: DirectivesComponent},
  { path: 'custom-validation', component: CustomReactiveValidationComponent},
  { path: 'form-builder', component: FormBuilderComponent},
  { path: 'image-upload', component: ImageUploadComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
