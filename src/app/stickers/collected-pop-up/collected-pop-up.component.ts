import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-collected-pop-up',
  templateUrl: './collected-pop-up.component.html',
  styleUrls: ['./collected-pop-up.component.css']
})
export class CollectedPopUpComponent {
  response: boolean;
  title: string;
  positiveButton: string;
  negativeButton: string;
  jetImage: string;
  constructor(
    public dialogRef: MatDialogRef<CollectedPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.jetImage = '../../../assets/imagenes/jet-logo.png';
    if (data.sticker.collected) {
      this.title = 'do you want to forget the sticker?';
      console.log(this.title);
      this.positiveButton = 'Yes, i want';
      this.negativeButton = 'Offcourse not!';
    } else {
      this.title = 'Do you already gets the sticker?';
      console.log(this.title);
      this.positiveButton = 'Yes, i got it!!';
      this.negativeButton = 'No, no yet';
    }

  }

  onNoClick(): void {
    this.response = false;
    this.dialogRef.close(this.response);
  }

  onClickPositiveResponse() {
    this.response = true;
    this.dialogRef.close(this.response);
  }
}
