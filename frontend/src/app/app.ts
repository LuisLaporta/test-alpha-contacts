// import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// export class App {
//   protected title = 'frontend';
// }



export class App {
  protected title = 'frontend';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8000/api.php')
      .subscribe(data => {
        console.log(data);
      });
  }
}