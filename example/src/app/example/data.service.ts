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
  public apiURL = signal<any>('');
  dataResource = resource(
    {
      request: () => ({
        apiUrl: this.apiURL()
      }),
      loader: async ({ request }) =>
        fetch(request.apiUrl)
          .then(
            (res) => {
              return res.json() as Promise<any[]>
            }
          )
    }
  )
}
//productId: WritableSignal<number> = signal(1);
//productApiResource = resource({
//  request: () => ({ id: this.productId() }),
//  loader: async (param) => {
//    const { id } = param.request as { id: number };
//    let url = `http://localhost:3000/products?id=${id}`;
//    return fetch(url).then((res) => res.json() as Promise<Product[]>);
//  },
//});

//productId: WritableSignal<number> = signal(1);
//productApiResource = resource({
//  request: () => ({ id: this.productId() }),
//  loader: async (param) => {
//    const { id } = param.request as { id: number };
//    let url = `http://localhost:3000/products?id=${id}`;
//    return fetch(url, { signal: param.abortSignal }).then((res) => res.json() as Promise<Product[]>);
//  },
//});

//productApiResource = resource({
//  request: () => (undefined),
//  loader: async (param) => {
//    const { id } = param.request as { id: number };
//    let url = `http://localhost:3000/products?id=${id}`;
//    return fetch(url, { signal: param.abortSignal }).then((res) => res.json() as Promise<Product[]>);
//  },
//});

//productApiResource = resource({
//  loader: async (param) => {
//    let id = this.productId();
//    let url = `http://localhost:3000/products?id=${id}`;
//    return fetch(url, { signal: param.abortSignal }).then(
//      (res) => res.json() as Promise<Product[]>
//    );
//  },
//});
