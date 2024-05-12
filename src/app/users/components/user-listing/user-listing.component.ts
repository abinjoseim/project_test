import { Component, OnDestroy, OnInit } from '@angular/core';

import { UserFacadeService } from '../../facade/user-facade.service';
import { IApiresponse } from '../../../shared/models/common.model';
import { IUsers } from '../../models/users.model';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrl: './user-listing.component.scss'
})

export class UserListingComponent implements OnInit, OnDestroy {

     public loadingStates: { [key: string]: boolean } = {};
     public users: IUsers[] = [];

     constructor(
          private _service: UserFacadeService
     ) {}

     public ngOnInit(): void {
          this._fetcUsers();
     }

     public ngOnDestroy(): void {}

     public createArray(length: number): Array<number> {
          return isNaN(length) ? Array(0) : Array(length);
     }

     private _fetcUsers(): void {
          let params: string = "";
          this.loadingStates['load_results'] = true;

          this._service.fetchUsers(params)
              .subscribe((response: IApiresponse<IUsers>) => {
                  this.loadingStates['load_results'] = false;
                  this.users = [];
                  
                  if(!!response.data && !!response.data && response.data.length > 0) {
                         this.users = [...response.data];
                    }
              })
     }
}
