import { Component, Input, OnDestroy, OnInit } from '@angular/core';

const IMG_URL =
  'https://img.freepik.com/free-vector/year-dragon-vector-chinesestyle-zodiac-symbol-isolated-white-background_8130-2619.jpg?size=626&ext=jpg&ga=GA1.1.940455158.1694612180&semt=sph';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white';

  isToggled = true;

  imgUrl = IMG_URL;

  imgWidth = `1`;

  ngOnInit(): void {
    console.log('Component created!');
  }

  ngAfterViewInit(): void {
    console.log('After init!');
  }

  ngDoCheck(): void {
    if (this.isToggled === true) {
      console.log({ isToggled: this.isToggled });
    }
  }

  ngOnDestroy(): void {
    console.log('Used for cleaning up unused data');
  }

  handleclick(): void {
    this.isToggled = !this.isToggled;
  }

  onChange(usernameValue: string) {
    this.imgWidth = `${usernameValue}`;
    console.log('username is: ' + this.imgWidth);
  }
}
