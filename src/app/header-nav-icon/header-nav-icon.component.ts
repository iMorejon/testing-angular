import { Component, Input, numberAttribute } from '@angular/core'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'header-nav-icon',
  standalone: true,
  imports: [],
  templateUrl: './header-nav-icon.component.html'
})
export class HeaderNavIconComponent {
  @Input({ transform: numberAttribute }) _id!: number
  @Input() name!: string
  @Input() href!: string
  @Input({ }) icon!: IconDefinition
}
