import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
  this.form =this.fb.group({
    from_name:['', [Validators.required,Validators.minLength(5),Validators.pattern("[a-zA-Z].*")]],
    to_name:'admin',
    email:['', [Validators.required, Validators.email]],
    message:null,
   
  });
}

 
  async send(){
    emailjs.init('YAj1OOluH-9nHja84')
    let response=await emailjs.send("service_t8728pl","template_79f8kvf",{
    from_name: this.form.value.from_name,
    to_name: this.form.value.to_name,
    email: this.form.value.email,
    message: this.form.value.message,
  });
  alert("Message has been sent");
    this.form.reset();
  }
}