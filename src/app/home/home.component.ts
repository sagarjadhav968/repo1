import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
 sideNavMenu: any; 	
  constructor(private _router : Router) {    
  this.sideNavMenu = [{"text":"New Node","expand":false,"id":null,"leaf":false,"icon":"fa fa-building fa 4x","routerLink":null,"bc":null,"domain":null,"children":[{"text":"newui","expand":false,"id":"4b5c24b6-6f1b-4296-9ea8-cb64c40e8561","leaf":true,"icon":"fa fa-arrow-circle-o-down fa 2x","routerLink":"node/core/newui","bc":"node","domain":"core","children":null},{"text":"employee","expand":false,"id":"20bf3775-9c79-4203-8d80-8d603fdf44da","leaf":true,"icon":"fa fa-user fa 2x","routerLink":"node/core/employee","bc":"node","domain":"core","children":null}]}];   }
  routeToLink(data: any) {
  if( data.children==null && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
