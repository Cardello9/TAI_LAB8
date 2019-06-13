import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  @Input() image: string;
  @Input() text: string;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
