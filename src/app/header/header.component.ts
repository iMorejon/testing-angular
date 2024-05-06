import { Component } from '@angular/core'
import { HeaderNavComponent } from '../header-nav/header-nav.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  submitSearch (value: string) {
    console.log('Searching!' + value)
  }
}
