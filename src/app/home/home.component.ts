import { Component } from '@angular/core';

type imageData = {
  imageUrl: String,
  tag: String,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: imageData[];
  groupedImages: any;
  currentTag: String;
  needGrouping: Boolean;
  error: String;
  publicKey: String;
  url: String;

  constructor() {
    this.images = [];
    this.groupedImages = {};
    this.publicKey = 'gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag';
    this.url = `https://api.giphy.com/v1/gifs/random?api_key=${this.publicKey}=`;
    this.currentTag = '';
    this.error = '';
    this.needGrouping = false;
  }

  getImage(res: imageData): void {
    if (this.needGrouping) {
      if (!this.groupedImages.hasOwnProperty(res.tag)) {
        this.groupedImages[`${res.tag}`] = [];
      }
      this.groupedImages[`${res.tag}`].push(res.imageUrl);
    }
    this.images.push(res);
  }

  handleError(error: String): void {
    this.error = error;
    this.resetError(3000);
  }

  clear(): void {
    this.currentTag = '';
    this.resetError(0);
    this.images = [];
    this.groupedImages = {};
  }

  groupImages(): void {
    this.needGrouping = !this.needGrouping;
    if (!this.needGrouping) {
      this.groupedImages = {};
      return void 0;
    }
    this.images.forEach((el: imageData) => {
      const groupName = el.tag;
      if (!this.groupedImages.hasOwnProperty(groupName)) {
        this.groupedImages[`${el.tag}`] = [];
      }
      this.groupedImages[`${el.tag}`].push(el.imageUrl);
    });
  }

  setTag(tagName: String) {
    this.currentTag = tagName;
  }

  private resetError(delay: number): void {
    if (delay) {
      setTimeout((): void => {
        this.error = '';
      }, delay);
    } else {
      this.error = '';
    }
  }
}
