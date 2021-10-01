import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import config from '../constants/config.json';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  private _images: Array<any> = [];
  public images: any = new BehaviorSubject<Array<any>>(this._images);

  constructor(
    private http: HttpClient
  ) { }

  getImagesJson = async (): Promise<void> => {
    const url: string = config.paths.images;

    const data: Array<any> = await this.http.get<Array<any>>(url).toPromise();
    this._images = [ ...data ];
    this.images.next(this._images);
  };
}
