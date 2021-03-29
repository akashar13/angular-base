import { BoundElementProperty } from '@angular/compiler';
import {Component} from '@angular/core';
import { cibBlackberry, cilBold } from '@coreui/icons';
import { ArgumentOutOfRangeError } from 'rxjs';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public hedcol={
    backgroundColor:"#cc2026",
    height:"60px",
  }
  public txt={
    fontWeight:"bold",
    color:"black",
  
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
