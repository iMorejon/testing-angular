import { Component } from '@angular/core'

// Components
import { CommunityPanelComponent } from './partials/community-panel/community-panel.component'
import { FeedComponent } from './partials/feed/feed.component'
import { FooterComponent } from '../pages/partials/footer/footer.component'
import { MessageBoxComponent } from '../message-box/message-box.component'
import { NewsAsideComponent } from './partials/news-aside/news-aside.component'
import { SmallProfileComponent } from './partials/small-profile/small-profile.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommunityPanelComponent,
    FeedComponent,
    FooterComponent,
    MessageBoxComponent,
    NewsAsideComponent,
    SmallProfileComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
}
