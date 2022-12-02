import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ContactosService {
  constructor(private http: HttpClient) {}

  getContactos() {
    return this.http.get<any>("https://reqres.in/api/users?page=2");
  }

  getDetail(id: number) {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`);
  }
}
