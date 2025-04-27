import { Component } from '@angular/core';
import { InvoiceItem } from '../../../invoice-items/interfaces/invoice-item.interface';
import { TableBestSellerComponent } from "../../components/table-best-seller/table-best-seller.component";
import { TableBestValueComponent } from "../../components/table-best-value/table-best-value.component";
import { TableBestRatedComponent } from "../../components/table-best-rated/table-best-rated.component";

@Component({
  selector: 'app-artisan-financial-reports',
  imports: [TableBestSellerComponent, TableBestValueComponent, TableBestRatedComponent],
  templateUrl: './artisan-financial-reports.component.html',
  styleUrl: './artisan-financial-reports.component.css'
})
export class ArtisanFinancialReportsComponent {
  invoiceItems : InvoiceItem[] = [];

}
