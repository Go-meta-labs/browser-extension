import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'extension';
  color: string = '#ffffff';

  ngOnInit(): void {
    chrome.storage.sync.get('color', ({ color }) => {
      this.color = color;
    });
  }

  public updateColor() {
    console.log(this.color)
    chrome.storage.sync.set({color: this.color});
    this.colorize()
  }

  public colorize() {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.executeScript(
          tabs[0].id!,
          { code: `document.body.style.backgroundColor = '${ this.color }';` }
        );
      });
  }
}
