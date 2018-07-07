import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ForbiddenValidatorDirective} from './shared/forbidden-name.directive';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterComponent } from './register/register.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective} from './shared/highlight.directive';
import { TextfieldComponent } from './textfield/textfield.component';
import { CustomReactiveValidationComponent } from './custom-reactive-validation/custom-reactive-validation.component';
import { CustomValidationDirective } from './directives/custom-reactive-validation/custom-validation.directive';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ReactiveFormComponent,
    ForbiddenValidatorDirective,
    RegisterComponent,
    DirectivesComponent,

    HighlightDirective,
    TextfieldComponent,
    CustomReactiveValidationComponent,
    CustomValidationDirective,
    FormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
