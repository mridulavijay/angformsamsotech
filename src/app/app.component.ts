import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplatedComponent } from './templated/templated.component';
import { ReactiveComponent } from './reactive/reactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplatedComponent,ReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valid1';
}
