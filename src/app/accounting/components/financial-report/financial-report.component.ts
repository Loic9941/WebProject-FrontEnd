import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-financial-report',
  imports: [],
  templateUrl: './financial-report.component.html',
  styleUrl: './financial-report.component.css'
})
export class FinancialReportComponent {

  constructor(
    private apiService: ApiService) { }

  ngOnInit(): void {
    //this.getFinancialReport();
  }

  // Add any methods or properties needed for the component here
}
