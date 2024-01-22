import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.scss',
})
export class EmpDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public employee: any) {}

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'green';
      case 'inactive':
        return 'gray';
      case 'terminated':
        return 'red';
      default:
        return 'black'; // Default color if status is not recognized
    }
  }
}
