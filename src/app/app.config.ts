import { ApplicationConfig , importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // Now we can inject HttpClientModule in our rest app
  providers: [importProvidersFrom(HttpClientModule)]
};
