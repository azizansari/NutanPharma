import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategories(data?) {
    return this.http.get(`${this.apiUrl}api/c/categories?${data}`);
  }

  deleteCategory(id) {
    return this.http.delete(`${this.apiUrl}api/c/categories/${id}`);
  }
  postCategory(payload){
    return this.http.post(`${this.apiUrl}api/c/categories/create`, payload);
  }
  updateCategory(id, payload){
    return this.http.put(`${this.apiUrl}api/c/categories/${id}`, payload)
  }
}
