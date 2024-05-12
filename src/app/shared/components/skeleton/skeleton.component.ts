import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: '[app-skeleton]',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent implements OnInit, OnChanges {

     @Input() noOfColumns: number = 2;

     public tableCoumn: number = 0;

     constructor() { }

     public ngOnInit(): void { }

     public ngOnChanges(changes: SimpleChanges): void {
          if (!!changes['noOfColumns'].currentValue) this.tableCoumn = changes['noOfColumns'].currentValue;
     }

     public createArray(length: number): Array<number> {
          return isNaN(length) ? Array(0) : Array(length);
     }
}
