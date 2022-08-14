import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  hide:boolean = false;
  showPassword: boolean = false;

  constructor(private formBuilder:FormBuilder, private _loginService: LoginService) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.form);
  }

  buildForm(){
    this.form = this.formBuilder.group({
   
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });

  }

  validarContrasena(control: AbstractControl){
    const contrasena: string = control.value || '';
    let error = null;
    let firstElement = contrasena.charAt(0);

  if(contrasena!='diplomadoAngular.'){
    error = {
      contrasena_inconrrecta: 'contrasena incorrecta'
    }
  }
    return error;
  }

  invalidField(field: string){
    return this.form.get(field)?.invalid && this.form.get(field)?.touched;
  }

  guardar():any {
    
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return false;
    }
    //guardar
    alert('Se ha logueado correctamente');
    console.log(this.form);

    this._loginService.loginService().subscribe(
      (data) => {
        console.log(data);
      }
    );

  }
  


  showHidePassword() {
    this.showPassword = !this.showPassword;
  }



}
