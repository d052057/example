import { Injectable, resource, signal } from '@angular/core';
import { of } from 'rxjs';
export interface Movie {
  id: number,
  title: string,
  param: string
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public videoBool = signal<boolean>(false);
  dataVResource = resource<any, any>(
    {
      request: () => this.videoBool(),
      loader: async () => {
        fetch("json/menus/videos/menu.json")
          .then(
            (res) => {
              return res.json() as Promise<any[]>
            }
          )
      }
    }
  )
  dataMResource = resource<any, any>(
    {
      request: () => this.videoBool(),
      loader: async () => {
        fetch("json/menus/movies/menu.json")
          .then(
            (res) => {
              return res.json() as Promise<any[]>
            }
          )
      }
    }
  )
}

