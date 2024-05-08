import { Component } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <input
      class="flex-grow hidden h-8 p-4 bg-gray-100 rounded-md resize-y lg:flex max-w-72 placeholder:text-gray-500"
      placeholder="Buscar"
      type="text"
      name="search"
      #search
      [formControl]="searchParam"
      (submit)="sendQuery()" />
  `
})
export class SearchBarComponent {

  searchParam = new FormControl('')

  sendQuery () {
    const value = this.searchParam.value ?? ''
    console.log(`Searching ${value}!`)
  }
}
