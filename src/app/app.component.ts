import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

// Components
import { CommunityPanelComponent } from './community-panel/community-panel.component'
import { FeedComponent } from './feed/feed.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { MessageBoxComponent } from './message-box/message-box.component'
import { NewsAsideComponent } from './news-aside/news-aside.component'
import { SmallProfileComponent } from './small-profile/small-profile.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommunityPanelComponent,
    FeedComponent,
    FooterComponent,
    HeaderComponent,
    MessageBoxComponent,
    NewsAsideComponent,
    SmallProfileComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testing-angular'
}
