import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'catalago-de-animes';

  highConstrast = false;

  modifyColorHighConstrast() {
    if (this.highConstrast == false) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      let links = document.getElementsByTagName('a');
      for(let i=0;i<links.length;i++)
      {
          if(links[i].href)
          {
              links[i].style.color = 'yellow';
          }
      }

      this.highConstrast = true;
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      let links = document.getElementsByTagName('a');
      for(let i=0;i<links.length;i++)
      {
          if(links[i].href)
          {
              links[i].style.color = 'black';
          }
      }
      this.highConstrast = false;
    }

  }

}
