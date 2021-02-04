import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.css']
})
export class ToTopButtonComponent implements OnInit {
  scrolled: boolean;

  constructor() {
    this.scrolled = false;
  }

  ngOnInit() {
  }

  //https://stackoverflow.com/questions/41363175/go-to-top-of-page-on-button-click-in-angular-2
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    this.scrolled = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
