import { Component, OnInit } from '@angular/core';
import { ShopManagerService } from 'src/app/services/shop-manager.service';

@Component({
  selector: 'app-shop-reports-menu',
  templateUrl: './shop-reports-menu.component.html',
  styleUrls: ['./shop-reports-menu.component.sass']
})
export class ShopReportsMenuComponent implements OnInit {

  shop: any;
  constructor(
    private shopManager: ShopManagerService
  ) { 
    this.shop = history.state.push
  }

  ngOnInit(): void {
    
  }

}
