import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: { field: string, header: string }[] = []; // Dynamic columns
  @Input() data: any[] = []; // Dynamic data
  @Input() rows: number = 5; // Default rows per page
  @Input() rowsPerPageOptions: number[] = [5, 10, 20]; // Default pagination options
}
