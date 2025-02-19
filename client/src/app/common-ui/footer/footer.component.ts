import { Component } from '@angular/core';
import { RouterLink }  from '@angular/router';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  menuItems: {label: string, link: string}[] = [
    {label: 'Shop', link: 'shop'},
    {label: 'About us', link: 'about-us'},
    {label: 'Services', link: 'services'},
    {label: 'Terms & Conditions', link: 'terms'},
    {label: 'Privacy Policy', link: 'privacy'},
  ]

}
