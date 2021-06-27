import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  postOrders(payload){
    return this.http.post(`${this.apiUrl}api/c/orders/create`, payload);
  }

  getOrders() {
    return this.http.get(`${this.apiUrl}api/c/orders`);
  }
  deleteOrder(id){
    return this.http.delete(`${this.apiUrl}api/c/orders/${id}`)

  }
}
