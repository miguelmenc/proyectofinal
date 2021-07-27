import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post'


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  user: any;
  allPost: Array<Post>  = [];


  constructor(private router: Router,
    private authService: AuthService,
    private postService: PostService) { }

  ngOnInit(): void {

    this.user = this.authService.userData()
    this.leerPost()
  }

  leerPost() {
    this.postService.readPost().subscribe(data => {

      this.allPost = []

      data.forEach((doc: any) => {

        const myPost:Post = doc.data()
        myPost.id = doc.id

        this.allPost.push(myPost)
        console.log(this.allPost)
      })
    })
  }

  recargar(){
    this.leerPost()
  }

}
