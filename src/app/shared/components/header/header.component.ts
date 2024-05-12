import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  
     constructor(
          private _router: Router,
     ) {}

     public ngOnInit(): void {}


     public checkRouter(urlString: string): boolean {
          return this._router.isActive(urlString, false);
     }

}
