import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cap-remote-app';

  public async ngOnInit() {
    console.log('keys for capacitor', JSON.stringify(await Storage.keys()));
  }
}
