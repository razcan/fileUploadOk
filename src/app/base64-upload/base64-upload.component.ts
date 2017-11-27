import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './../app.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'base64-upload',
  templateUrl: './base64-upload.component.html'
})
export class Base64UploadComponent {
  form: FormGroup;
  loading: Boolean = false;
  Http: any;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
       const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    console.log(this.form.value.avatar.filename);
    console.log(this.form.value.avatar.filetype);
    console.log(this.form.value.avatar.value);
    // this.http.post('apiUrl', formModel)
    // tslint:disable-next-line:max-line-length
    this.http.post('http://localhost:3000/uploadFile', {filename: this.form.value.avatar.filename, filetype: this.form.value.avatar.filetype, value: this.form.value.avatar.value}).subscribe((res) => {
          const result = res.json();
          console.log(result);
          setTimeout(() => {
            console.log(formModel);
            alert('done!');
            this.loading = false;
          }, 1000);
        });
        }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}
