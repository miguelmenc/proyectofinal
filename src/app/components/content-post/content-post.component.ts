import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.scss']
})
export class ContentPostComponent implements OnInit {

post: any = undefined;
id: string = "";

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private postService: PostService) {

      this.id = this.route.snapshot.paramMap.get('id') as string;
      this.postService.getPost(this.id).subscribe(data => {
        const uidPost: any = data.data()
        this.post = uidPost;
      })
 

     }

  ngOnInit(): void {
    this.loadOnePost()
    window.scrollTo(0,0)
  }

loadOnePost() {
  this.post = this.postService.getPost(this.id)
}
}
