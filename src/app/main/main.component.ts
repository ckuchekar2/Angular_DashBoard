import { Component } from '@angular/core';
import { TopWidgetsComponent } from "../top-widgets/top-widgets.component";
import { SalesByMonthComponent } from "../sales-by-month/sales-by-month.component";
import { SalesByCatagoryComponent } from "../sales-by-catagory/sales-by-catagory.component";
import { LastFewTransacctionsComponent } from "../last-few-transacctions/last-few-transacctions.component";
import { TopThreeProductsComponent } from "../top-three-products/top-three-products.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [TopWidgetsComponent, SalesByMonthComponent, SalesByCatagoryComponent, LastFewTransacctionsComponent, TopThreeProductsComponent]
})
export class MainComponent {

}
