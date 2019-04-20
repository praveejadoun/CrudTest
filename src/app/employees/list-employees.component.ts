import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  socket;
  constructor(private _employeeService:EmployeeService) {
    this.socket = io("http://localhost:5000");
   }

  ngOnInit() {
  this.employees = this._employeeService.getEmployees();
  
  this.socket.on('data1',(res)=>{
    console.log("data emitted" + res)});
  
  }

  editEmployee(employee:Employee){
    this._employeeService.editEmployees(employee);
  }

}
