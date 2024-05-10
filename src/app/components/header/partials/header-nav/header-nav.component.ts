import { Component } from '@angular/core'
import { HeaderNavIconComponent } from '@components/header/partials/header-nav-icon/header-nav-icon.component'

@Component({
  selector: 'header-nav',
  standalone: true,
  imports: [HeaderNavIconComponent],
  templateUrl: './header-nav.component.html',
})
export class HeaderNavComponent {
  links = [
    {
      _id: 0,
      name: 'inicio',
      href: '/',
      icon: 'assets/nav-icons/faHouse.svg',
    },
    {
      _id: 1,
      name: 'mi red',
      href: '/network',
      icon: 'assets/nav-icons/faUserGroup.svg',

    },
    {
      _id: 2,
      name: 'empleos',
      href: '/jobs',
      icon: 'assets/nav-icons/faBriefcase.svg',
    },
    {
      _id: 3,
      name: 'mensajes',
      href: '/messages',
      icon: 'assets/nav-icons/faEnvelope.svg',

    },
    {
      _id: 4,
      name: 'notificaciones',
      href: '/updates',
      icon: 'assets/nav-icons/faBell.svg',
    },
    {
      _id: 5,
      name: 'perfil',
      href: '/profile',
      icon: 'assets/nav-icons/faUserCircle.svg',
    },
  ]
}
