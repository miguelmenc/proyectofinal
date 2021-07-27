import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { PostService } from 'src/app/shared/services/post.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-notas',
  templateUrl: './create-notas.component.html',
  styleUrls: ['./create-notas.component.scss'],
})
export class CreateNotasComponent implements OnInit {
  bioForm: FormGroup;
  bioId?: any;
  ss: any;
  title = 'cloudsSorage';
  uploadPercent: Observable<any> | undefined;
  downloadURL!: Observable<string> | undefined;
  percent = 0;
  url: any = "";
  mainImage?: string;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, //preguntar con el fireauthguard
    private postService: PostService
  ) {
    this.bioForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      text: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.bioForm.controls;
  }
  savePost() {
    // if(this.bioForm.invalid) {
    //   this.notifier.notify('error', 'Los datos no son válidos');
    //   return
    // }

    // console.log("Guardar minibio", this.bioForm.value)

    this.postService.createPost(this.bioForm.value, JSON.parse(localStorage.getItem('user')).uid );
    this.router.navigate(['notas']);

    // this.minibioService.createMinibio(this.bioForm.value).then(success => {
    //   this.notifier.notify('success', "Todo ok!");
    //   this.router.navigate(['/profile']);
    // }).catch(error =>  {
    //   this.notifier.notify('error', 'Ups, ha ocurrido un error');
    // })
  }

  actualizarPost() {
    // if(this.bioForm.invalid) {
    //   this.notifier.notify('error', 'Los datos no son válidos');
    //   return
    // }

    // console.log("Actualizar minibio", this.bioForm.value)

    // this.postService.updatePost(this.bioId, this.bioForm.value);
    // this.router.navigate(['notas']);

    // this.minibioService.updateMinibio(this.bioId,  this.bioForm.value).then(success => {
    //   this.notifier.notify('success', "Actualizado");
    //   this.router.navigate(['/profile']);
    // }).catch(error =>  {
    //   this.notifier.notify('error', 'Ups, ha ocurrido un error');
    // })
  }


    readUrl(event:any) {
      const file = event.target.files[0];
    const filePath = Date.now() + `ImagenesUsers/`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file)


      
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
    
        reader.onload = (event: ProgressEvent) => {
          this.url = (<FileReader>event.target).result;
        }
    
        reader.readAsDataURL(event.target.files[0]);
      }

      // observe percentage changes
    task.percentageChanges().subscribe(number => {
      this.percent = number!
    })
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL()

          this.downloadURL.subscribe(data => {
            this.bioForm.patchValue({
              image: data
            })
          })

        })
     )
    .subscribe()
  }
}
    /*
    const file = event.target.files[0];
    const filePath = `ImagenesUsers/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ImagenesUsers/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            if (url) {
              this.ss = url;
            }
            console.log(this.ss);
          });
        })
      )
      .subscribe((url: any) => {
        if (url) {
          console.log(url);
        }
      });
  }
  */


