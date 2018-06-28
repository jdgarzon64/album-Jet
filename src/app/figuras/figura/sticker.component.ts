import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from '../../servicios/paginator/pagination.service';
import { Subscription } from 'rxjs/Subscription';
import { Sticker } from '../../modelo/Sticker';
import { PageEvent, MatDialogConfig } from '@angular/material';
import { CollectedPopUpComponent } from '../collected-pop-up/collected-pop-up.component';
import { MatDialog } from '@angular/material';
import { User } from '../../modelo/User';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {
  @Input() currentUser: User;
  url: string;
  stickers: Sticker[];
  stickersSubscription$: Subscription;
  length = 30;
  pageSize = 6;
  pageSizeOptions = [6];
  pageEvent: PageEvent;
  IMAGE_ALREADY_COLLECTED_CLASS = 'fullColorImage';
  IMAGE_UNCOLLECTED = 'greyImage';

  constructor(private paginationService: PaginationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.metodo(0);
    console.log(this.stickers);
    console.log(this.paginationService.getPage(5));
  }
  /*
    getFiguras() {
      this.stickersSubscription$ = this.paginationService
        .getStickers()
        .subscribe((result: Sticker[]) => {
          this.stickers = result;
        });
    }
  */
  metodo(data: any) {
    console.log('^_^', data);
    this.paginationService.getPage(data + 1).subscribe((x) => {
      this.stickers = [];
      this.stickers = x;
    });
  }

  eventClickOnImage(sticker: Sticker) {
    console.log(sticker.collected);
  }

  isCollectedImage(sticker: Sticker) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.height = '340px';
    dialogConfig.data = {
      sticker : sticker,
      nick : this.currentUser.user
    };
    const dialogRef = this.dialog.open(CollectedPopUpComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result && (sticker.collected === false)) {
        sticker.classImage = this.IMAGE_ALREADY_COLLECTED_CLASS;
        sticker.collected = true;
      } else if (result && (sticker.collected === true)) {

        sticker.classImage = this.IMAGE_UNCOLLECTED;
        sticker.collected = false;
      }
    });
  }
}
