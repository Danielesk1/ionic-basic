import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;
  images: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private imagesService: ImagesService,
  ) {
    this.imagesService.getData().subscribe(data => {
      this.images = data.slice(0,11)
      console.log(this.images);
    });
  }

  ngOnInit() {
    console.log('Im in')
  }

}
