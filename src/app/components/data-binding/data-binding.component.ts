import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  // string, number, boolean, data

  courseName: string = "Angular18";

  stateName: string = "bihar"

  inputType = "checkbox";


  rollNo: number = 123;

  isIndian: boolean = false;

  currentDate: Date = new Date();

  firstName = signal("chetan jogi")

  constructor() {

  }

  changeCourseName() {
    this.courseName = "React js"
    this.firstName.set("sachin");
  }
  showAlert(message: string) {
    alert(message)
  }

}
