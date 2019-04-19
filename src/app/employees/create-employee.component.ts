import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ Department } from '../models/department.model'
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm')  
  private _createEmployeeForm: NgForm;
  public get createEmployeeForm(): NgForm {
    return this._createEmployeeForm;
  }
  
  employee:Employee={
  id : null,
  name:null,
  gender:null,
  email:'',
  phoneNumber:null,
  contactPreference:null,
  dateOfBirth: null,
  department:null,
  isActive:false,
  photoPath:null
}

departments:Department[]=[
{id:1,name:"Help Desk"},
{id:2,name:"HR"},
{id:3,name:"IT"},
{id:4,name:"Payroll"},

] ;

  constructor(private _employeeService:EmployeeService,private _router:Router) { }

  ngOnInit() {
  }

  saveEmployee(){
    this.employee.photoPath='assets/images/image4.png';
    this._employeeService.saveEmployees(this.employee);
    this._router.navigate(['list'])
  }

}
