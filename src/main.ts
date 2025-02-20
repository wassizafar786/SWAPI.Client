import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './app/environments/environment.prod';
import { provideHttpClient } from '@angular/common/http';


if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
