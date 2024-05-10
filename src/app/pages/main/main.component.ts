import { Component } from '@angular/core'

// Components
import { CommunityPanelComponent } from './components/community-panel/community-panel.component'
import { FeedComponent } from './components/feed/feed.component'
import { FooterComponent } from '../components/footer/footer.component'
import { MessageBoxComponent } from '../components/message-box/message-box.component'
import { NewsAsideComponent } from './components/news-aside/news-aside.component'
import { SmallProfileComponent } from './components/small-profile/small-profile.component'

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
