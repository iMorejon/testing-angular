import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { MainComponent } from './pages/main/main.component'
import { HeaderComponent } from './pages/components/header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testing-angular'
}
