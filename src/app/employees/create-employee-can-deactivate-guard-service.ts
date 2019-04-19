import { CanDeactivate } from "@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";
import { Injectable } from "@angular/core";

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>
{
    canDeactivate(component:CreateEmployeeComponent):boolean{
        console.log("component");
        console.log(component);
        if (component.createEmployeeForm.dirty){
            return confirm('Are you want to discard your changes?');
        }
        // if (component.employee.name===null)
        // {
        //     return confirm('Are you want to discard your changes?');
        // }
        return true;
    }
}