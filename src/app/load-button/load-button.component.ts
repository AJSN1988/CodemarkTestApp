import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

type imageErrors = {
  noInput: String,
  noTag: String,
  httpError: String,
}

type imageData = {
  imageUrl: String,
  tag: String,
}

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.scss']
})
export class LoadButtonComponent {
  @Input() tag: String;
  @Input() url: String;

  @Output() onLoaded = new EventEmitter<imageData>();
  @Output() onError = new EventEmitter<String>();

  fullUrl: String;
  errorMessages: imageErrors;
  waitingStatus: Boolean;

  constructor(private http: HttpClient) {
    this.waitingStatus = false;
    this.errorMessages = {
      noInput: 'Заполните поле \'тэг\'',
      noTag: 'По тегу ничего не найдено',
      httpError: 'Произошла http ошибка'
    }
  }

  loadImage(): any {
    this.waitingStatus = true;
    if (!this.tag) {
      this.onError.emit(this.errorMessages.noInput);
      this.waitingStatus = false;
    } else {
      this.waitingStatus = true;
      const url = `${this.url}${this.tag}`;
      let response: imageData;

      this.http.get(url).subscribe(
        (res: any) => {
          if (res.data.image_url) {
            response = {
              imageUrl: res.data.image_url,
              tag: this.tag,
            };
            this.onLoaded.emit(response);
          } else {
            this.onError.emit(this.errorMessages.noTag);
          }
          this.waitingStatus = false;
        },
        (err: HttpErrorResponse) => {
          console.error(err.message);
          this.onError.emit(this.errorMessages.httpError);
          this.waitingStatus = false;
        }
      );
    }
  }
}
