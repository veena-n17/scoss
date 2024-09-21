import { Component } from '@angular/core';
import { GalleryUnit } from '../../models';

@Component({
  selector: 'scoss-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  public images: GalleryUnit[] = [
    {
      title: 'Anon Recruitment 2024', images: [
        { src: '/images/gallery/anon-recruitment-2024/1.jpg', alt: 'recruitment 2024 1' },
        { src: '/images/gallery/anon-recruitment-2024/2.jpg', alt: 'recruitment 2024 2' },
        { src: '/images/gallery/anon-recruitment-2024/3.jpg', alt: 'recruitment 2024 3' },
        { src: '/images/gallery/anon-recruitment-2024/4.jpg', alt: 'recruitment 2024 4' },
        { src: '/images/gallery/anon-recruitment-2024/5.jpg', alt: 'recruitment 2024 5' },
        { src: '/images/gallery/anon-recruitment-2024/6.jpg', alt: 'recruitment 2024 6' },
        { src: '/images/gallery/anon-recruitment-2024/7.jpg', alt: 'recruitment 2024 7' },
        { src: '/images/gallery/anon-recruitment-2024/8.jpg', alt: 'recruitment 2024 8' },
        { src: '/images/gallery/anon-recruitment-2024/9.jpg', alt: 'recruitment 2024 9' },
        { src: '/images/gallery/anon-recruitment-2024/10.JPG', alt: 'recruitment 2024 10' },
        { src: '/images/gallery/anon-recruitment-2024/11.JPG', alt: 'recruitment 2024 11' },
        { src: '/images/gallery/anon-recruitment-2024/12.JPG', alt: 'recruitment 2024 12' },
        { src: '/images/gallery/anon-recruitment-2024/13.JPG', alt: 'recruitment 2024 13' },
      ]
    }
  ];
}
