import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:String = "/api/v1/employee";

  fetchAllEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(`${this.baseUrl}`);
  }
  createEmployees(data:Employee) {
    return this._httpClient.post<Employee[]>(`${this.baseUrl}`, data);
  }
  updateEmployee(data: Employee){
    return this._httpClient.put<Employee>(`${this.baseUrl}/${data.id}`, data);
  }
  deleteEmployee(id: number) {
    return this._httpClient.delete(`${this.baseUrl}/${id}`);
  }


}
