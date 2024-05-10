import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { MainComponent } from '@app/pages/main/main.component'
import { HeaderComponent } from '@components/header/header.component'

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
