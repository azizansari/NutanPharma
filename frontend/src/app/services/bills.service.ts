import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class BillService {
  public apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getOrders(id) {
    return this.http.get(`${this.apiUrl}api/c/orders/${id}`);
  }
}
