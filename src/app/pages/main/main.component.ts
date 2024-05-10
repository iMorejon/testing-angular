import { Component } from '@angular/core'

// Components
import { CommunityPanelComponent } from '@app/pages/main/components/community-panel/community-panel.component'
import { FeedComponent } from '@app/pages/main/components/feed/feed.component'
import { FooterComponent } from '@app/pages/components/footer/footer.component'
import { MessageBoxComponent } from '@app/pages/components/message-box/message-box.component'
import { NewsAsideComponent } from '@app/pages/main/components/news-aside/news-aside.component'
import { SmallProfileComponent } from '@app/pages/main/components/small-profile/small-profile.component'

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
