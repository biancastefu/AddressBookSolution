// src/main.ts
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(HttpClientModule, MatDialogModule)  // Import MatDialogModule here
    ]
}).catch(err => console.error(err));
