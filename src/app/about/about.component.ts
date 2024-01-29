import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // imageUrls: string[] = [
  //   'assets/img/image.jpeg',
  //   'assets/img/image1.jpeg',
  //   'assets/img/image2.jpeg',
  //   'assets/img/image3.jpeg',
  //   // Add more image URLs as needed
  // ];
  // currentImageIndex: number = 0;
  videoUrl: SafeResourceUrl;
    



  ngOnInit() {
    // this.changeImageEvery5Seconds();
  }
    constructor(private sanitizer: DomSanitizer) {
      // Replace 'your-video-path' with the actual path to your video file.
      const videoPath = 'assets/img/video.mp4';
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
    }
    // changeImageEvery5Seconds() {
    //   setInterval(() => {
    //     this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    //   }, 5000);
    // }
  }
  
