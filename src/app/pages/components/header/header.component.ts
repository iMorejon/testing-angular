import { Component } from '@angular/core'
import { HeaderNavComponent } from './partials/header-nav/header-nav.component'
import { SearchBarComponent } from './partials/search-bar/search-bar.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavComponent, SearchBarComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
