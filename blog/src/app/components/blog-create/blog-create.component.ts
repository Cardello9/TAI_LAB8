import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public post = {
    image: '',
    title: ''
    }
  

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.post.image + " " + this.post.title);
    this.dataService.createOrUpdate(this.post).subscribe(f => {
      this.router.navigate(['/blog']);
    });
  }


}
