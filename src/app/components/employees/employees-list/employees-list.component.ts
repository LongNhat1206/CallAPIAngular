import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
employees:Employee[] = [];
  constructor(private employeesServices: EmployeesService ) { }

  ngOnInit(): void {
    // this.employeesServices.getAllEmployees().subscribe({
    //   next :  (employees) =>{
    //     this.employees = employees;
    //     console.log(this.employees);
    //   },
    //   error : (err) =>
    //   {
    //     console.log(err);
    //   }
     
    // })
    this.employeesServices.getAllEmployees().subscribe(res=>{
      this.employees = res.result;
      console.log(this.employees);
    })
  }

}
