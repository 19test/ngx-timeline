import { Component } from '@angular/core';

import { TimelineEvent } from 'ngx-timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: Array<TimelineEvent>;

  ngOnInit() {
    this.events = new Array<TimelineEvent>();
    this.events.push({ "date": new Date(), "header": "Merhaba", "body": "falan filan", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "Merhaba", "body": "falan filan", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "Merhaba", "body": "falan filan", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "Merhaba", "body": "falan filan", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "Merhaba", "body": "falan filan", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "Merhaba", "body": "falan filan", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "Merhaba", "body": "falan filan", "icon": "fa-github" });
  }
}
