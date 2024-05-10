import { Component } from '@angular/core'
import { CommunityPanelComponent } from '@app/pages/main/components/community-panel/community-panel.component'

@Component({
  selector: 'small-profile',
  standalone: true,
  imports: [CommunityPanelComponent],
  templateUrl: './small-profile.component.html'
})
export class SmallProfileComponent {

  smCommunityToggle () {
    const toggleArrow = (button: Element) => {
      let txtc = button.textContent
      let arrow = txtc?.trim().slice(12)

      if (arrow === '⬇️') arrow = '⬆️'
      else arrow = '⬇️'

      button.textContent = txtc?.trim().slice(0, 12) + arrow
    }

    const smallQuery = window.matchMedia("(width <= 768px)")
    if (!smallQuery.matches) return

    const $ = document.getElementById.bind(document)

    const el = $('sm-dropdowm')
    if (el) el.classList.toggle('hidden')

    const button = $('toggler')
    if (button) toggleArrow(button)
  }
}
