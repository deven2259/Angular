import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup({
    email:new FormControl ('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)]),
  });
  login(){
      console.log(`values ${this.form.get('email').value}`);

      if(this.form.get('email').value=='admin@gmail.com' && this.form.get('password').value=='9121708090') {
        console.log('login Sucess');
      }else{
      console.log('Login Failed');
      }
  }

}
