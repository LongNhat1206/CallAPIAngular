import { EmployeeModel } from './../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  getAllEmployees() : Observable<EmployeeModel> {
   return this.http.get<EmployeeModel>(this.baseApiUrl + '/api/PurchaseOrders/GetAll');
  }
}
