import {Component, OnInit} from '@angular/core';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('/api/login')
      .map(res => res.json())
      .catch(err => {
        throw err;
      })
      .subscribe(value => {
        this.title = value.json();
      });
  }
}
