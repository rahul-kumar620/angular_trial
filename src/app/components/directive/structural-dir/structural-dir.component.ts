import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.scss'
})
export class StructuralDirComponent {

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;

  selectedState: string = '';

  cityArray: string[] = ['pune', 'mumbai', 'gaya', 'patna'];

  studentList: any[] = [
    { studentId: 1, name: 'AAA', city: 'Pune', isActive: false },
    { studentId: 2, name: 'BBB', city: 'gaya', isActive: false },
    { studentId: 3, name: 'CCC', city: 'patna', isActive: true },
    { studentId: 4, name: 'DDD', city: 'jamshedpur', isActive: false },
    { studentId: 5, name: 'EEE', city: 'surat', isActive: false },
    { studentId: 6, name: 'FFF', city: 'delhi', isActive: false },
  ]

  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
