import { Component, Input, numberAttribute } from '@angular/core'
import toCapitalize from '../../lib/toCapitalize'

@Component({
  selector: 'header-nav-icon',
  standalone: true,
  imports: [],
  templateUrl: './header-nav-icon.component.html'
})
export class HeaderNavIconComponent {

  @Input({ transform: numberAttribute }) _id!: number
  @Input({ transform: toCapitalize }) _name!: string
  @Input() href!: string
  @Input() icon!: string
}
