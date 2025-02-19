import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems: {label: string, link: string}[] = [
    {label: 'Home', link: '/'},
    {label: 'Shop', link: 'shop'},
    {label: 'About us', link: 'about_us'},
    {label: 'Services', link: 'services'},
  ]
}
