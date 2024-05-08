import { Component } from '@angular/core'

// Components
import { CommunityPanelComponent } from '../community-panel/community-panel.component'
import { FeedComponent } from '../feed/feed.component'
import { FooterComponent } from '../footer/footer.component'
import { MessageBoxComponent } from '../message-box/message-box.component'
import { NewsAsideComponent } from '../news-aside/news-aside.component'
import { SmallProfileComponent } from '../small-profile/small-profile.component'

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
