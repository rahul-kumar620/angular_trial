//import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuralDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_trial';
}
