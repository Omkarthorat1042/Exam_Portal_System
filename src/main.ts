// filepath: /e:/Exam Portal System/examfront/src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

bootstrapApplication(AppComponent, {
  providers: [
    BrowserAnimationsModule,
    MatButtonModule
  ]
}).catch(err => console.error(err));