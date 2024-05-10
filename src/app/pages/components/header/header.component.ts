import { Component } from '@angular/core'
import { HeaderNavComponent } from '@app/pages/components/header/partials/header-nav/header-nav.component'
import { SearchBarComponent } from '@app/pages/components/header/partials/search-bar/search-bar.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavComponent, SearchBarComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
