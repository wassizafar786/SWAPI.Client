import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/shared/header/header.component";
import { SideBarComponent } from "./components/shared/side-bar/side-bar.component";
import { HttpDataAccessService } from "./shared/services/http-data-access.service";
import { HttpResponseHandlerService } from "./shared/services/http-response-handler.service";
import { HttpClient, provideHttpClient } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    HttpDataAccessService,HttpResponseHandlerService,provideHttpClient()],

  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() { }
}
