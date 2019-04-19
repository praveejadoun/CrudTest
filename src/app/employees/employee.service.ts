import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService{
    private listEmployee:Employee[]=[
        {
          id : 1,
          name:'Praveen',
          gender:'male',
          email:'abc@abc.com',
          phoneNumber:12345678,
          contactPreference:'Email',
          dateOfBirth: new Date('10/25/988'),
          department:'IT',
          isActive:true,
          photoPath:'assets/images/image1.png'
        },
        {
          id : 2,
          name:'Raman',
          gender:'male',
          email:'abc@abc.com',
          phoneNumber:12345678,
          contactPreference:'Phone',
          dateOfBirth: new Date('10/25/988'),
          department:'IT',
          isActive:true,
          photoPath:'assets/images/image2.png'
        },
        {
          id : 3,
          name:'Ramesh',
          gender:'male',
          email:'abc@abc.com',
          phoneNumber:12345678,
          contactPreference:'Email',
          dateOfBirth: new Date('10/25/988'),
          department:'IT',
          isActive:true,
          photoPath:'assets/images/image3.png'
          
        }
      ];
 
     public getEmployees():Employee[]{
          return this.listEmployee;
      }

    public saveEmployees(employee:Employee):void{
        this.listEmployee.push(employee);
    }

    public editEmployees(employee:Employee):void{
      employee.name = "Praveen Singh edited";
  }

}