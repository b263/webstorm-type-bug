import {Component, inject} from '@angular/core'
import {AppStore} from "./app.store";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly store = inject(AppStore);
}
