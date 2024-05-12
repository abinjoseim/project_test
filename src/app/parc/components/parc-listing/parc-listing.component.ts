import { Component, OnDestroy, OnInit } from '@angular/core';

import { ParcFacadeService } from '../../facade/parc-facade.service';
import { IApiresponse } from '../../../shared/models/common.model';
import { IParc } from '../../models/parc.model';

@Component({
  selector: 'app-parc-listing',
  templateUrl: './parc-listing.component.html',
  styleUrl: './parc-listing.component.scss'
})

export class ParcListingComponent implements OnInit, OnDestroy {

     public loadingStates: { [key: string]: boolean } = {};
     public parcs: IParc[] = [];

     constructor(
          private _service: ParcFacadeService
     ) {}

     public ngOnInit(): void {
          this._fetcParcs();
     }

     public ngOnDestroy(): void {}

     public createArray(length: number): Array<number> {
          return isNaN(length) ? Array(0) : Array(length);
     }

     private _fetcParcs(): void {
          let params: string = "";
          this.loadingStates['load_results'] = true;

          this._service.fetchParc(params)
              .subscribe((response: IApiresponse<IParc>) => {
                  this.loadingStates['load_results'] = false;
                  this.parcs = [];
                  
                  if(!!response.data && !!response.data && response.data.length > 0) {
                         this.parcs = [...response.data];
                    }
              })
     }
}
