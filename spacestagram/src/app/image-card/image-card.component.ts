import { Component, Input, OnInit } from '@angular/core';
import { ImageCardService } from './service/image-card.service';
import { Image } from './model/image';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  
  images : Image[] = []; 


  constructor(private imageCardService:ImageCardService) { }

  ngOnInit(): void {

    this.imageCardService.getImages()
      .subscribe(response => {
        this.images = response.photos;
        console.log(this.images[1]);
      });
       

  }


}
