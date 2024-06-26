import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  
  public editForm: FormGroup
  public editPassword: FormGroup
  public editar: boolean = false
  public editarPass: boolean = false
  public editarFoto = false
  
  public modal: boolean = false

  public tierras: string[] = [
    '../../../assets/images/profile/llanura.png',
    '../../../assets/images/profile/isla.png', 
    '../../../assets/images/profile/pantano.png', 
    '../../../assets/images/profile/montaña.png',
    '../../../assets/images/profile/bosque.png'
  ]

  public marcos: string[] = [
    'https://i.imgur.com/RuuGFZM.png',
    'https://i.imgur.com/X2WGg5N.png',
    'https://i.imgur.com/PtUv0jL.png',
    'https://i.imgur.com/3Z2Dlu2.png',
    'https://i.imgur.com/5xUN6sU.png',
  ]

  public user: User | null = {}
  public currentUserid: number | null;

  public visible1:boolean = true
  public changetype1:boolean = true

  public visible2:boolean = true
  public changetype2:boolean = true



  constructor(private formBuilder: FormBuilder,
              public userService: UsersService,
              private toastr: ToastrService){
  }
  ngOnInit(): void {
    
    this.getUserId()
    this.getProfile();
    this.buildForm();
    this.buildForm2() 
    this.editForm.disable();
    this.editPassword.disable();
  }

  getUserId(){
    this.userService.currentUserChanges().subscribe(user =>{
      this.currentUserid = user.id_user
      })
  }

  getProfile(){
    this.userService.getProfile(this.currentUserid).subscribe((res:any) =>{
      if(!res.error){
        this.user = res.data[0]
        this.editForm.patchValue({
          name:this.user.nameUser,
          email: this.user.emailUser,
          description: this.user.description
        })
      }
    })
  }

  // MODIFICAR DATOS PERFIL
  private buildForm(){

    this.editForm = this.formBuilder.group({
      name: [this.user.nameUser, [Validators.maxLength(20), Validators.required]],
      email: [this.user.emailUser, [Validators.email, Validators.required]],
      description: [this.user.description, Validators.maxLength(150)],
    })
  }

  private buildForm2(){
    const minPassLength = 8

    this.editPassword = this.formBuilder.group({
      password: ['',[Validators.required, Validators.minLength(minPassLength)]],
      password2: ['',[Validators.required, this.check]]
    })
  }

  private check(control:AbstractControl){

    let resultado = {noMatch: true}
      if(control.parent?.value.password == control.value){
        resultado = null
      }

    return resultado
  }

  public edit(){
    if (this.editar == false){
      this.editar = true;
      this.editForm.enable();
      this.editForm.markAsUntouched()
      }
  }

  public save(){
    let editUser = { ...this.user };
    if(!this.editForm.invalid){
      let editValues = this.editForm.value
      editUser.nameUser = editValues.name
      editUser.emailUser = editValues.email
      editUser.description = editValues.description

      this.userService.putProfile(editUser).subscribe((res:any) =>{
        if(!res.error){
          this.user = editUser
          
          this.editForm.patchValue({
            name: this.user.nameUser,
            email: this.user.emailUser,
            description: this.user.description
          });

          this.toastr.success(res.mensaje, '¡Éxito!')
          this.editForm.disable();

        } else {
          this.toastr.error(res.mensaje, '¡Ups!')
          this.buildForm()
          this.editForm.disable();
        }
      })
     } 
      this.editar = false
  }

  public editPass(){
    if (this.editarPass == false){
      this.editarPass = true;
      this.editPassword.enable();
    }
  }

  public savePass(){
    if(!this.editPassword.invalid){
      let editValues = this.editPassword.value
      this.user.passwordUser = editValues.password
      this.userService.putPassword(this.user).subscribe((res:any) => {
        if(!res.error){
          this.toastr.success(res.mensaje, '¡Éxito!')
        } else {
          this.toastr.error(res.mensaje, '¡Ups!')
        }
      })
    } else {
      this.toastr.error('Datos no validos', '¡Ups!')
    }
    this.editarPass = false
    this.editPassword.disable();
    this.editPassword.reset()
  }

  public cancel(){
    this.editarPass = false
    this.editPassword.disable();
  }

  // MODIFICAR FOTO Y MARCO 

  public editPhoto(){
  if(!this.editarFoto){
    this.editarFoto = true
    this.modal = true
  }
  }
  public seleccionAvatar(avatar:string){
    this.user.avatar = avatar
  }

  public seleccionTierra(tierra:string){
    this.user.icon = 
      tierra === this.tierras[0] ? this.marcos[0] :
      tierra === this.tierras[1] ? this.marcos[1] :
      tierra === this.tierras[2] ? this.marcos[2] :
      tierra === this.tierras[3] ? this.marcos[3] :
      tierra === this.tierras[4] ? this.marcos[4] :
      this.marcos[0]
  }

  public savePhoto(){
    this.userService.putAvatar(this.user).subscribe((res:any) => {
      if(!res.error){
        this.toastr.success(res.mensaje, '¡Éxito!')
      } else {
        this.toastr.info(res.mensaje)
      }
    })
    this.editarFoto = false
    this.modal = false
  }
  
  // mostrar contraseña

  viewPass(password: number){
    password == 1 ? (this.visible1 = !this.visible1, this.changetype1 = !this.changetype1)
                  : (this.visible2 = !this.visible2, this.changetype2 = !this.changetype2)
  }
  // bordes inputs

  public borderColor(){
    let icon =
      this.user.icon == this.marcos[1] ? '#28669F' :
      this.user.icon== this.marcos[2] ? '#643D6A':
      this.user.icon== this.marcos[3] ? '#B6281A':
      this.user.icon== this.marcos[4] ? '#5C724B':
      '';
    return icon
  }
  
}

