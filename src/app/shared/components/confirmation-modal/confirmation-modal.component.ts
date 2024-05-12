import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent implements OnInit {

     constructor(
          public dialogRef: MatDialogRef<ConfirmationModalComponent>
     ){ }

     public ngOnInit(): void {}

     public confirm(): void {
          this.dialogRef.close(true);
     }

     public cancel(): void {
          this.dialogRef.close(false);
     }
}
