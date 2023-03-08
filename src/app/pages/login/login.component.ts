import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { onAuthStateChanged, User } from '@firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(public authService:AuthService,private auth:Auth,private router:Router){}
  // user!: User|null;
  ngOnInit(): void {
    onAuthStateChanged(this.auth,(userInfo)=>{
          if(userInfo){
            this.authService.user=userInfo;
            console.log(userInfo);
          }else{
            this.authService.user=null;
          }
        })
  }
  // checkUser(){
  //   onAuthStateChanged(this.auth,(userInfo)=>{
  //     if(userInfo){
  //       this.user=userInfo;
  //       console.log(userInfo);
  //     }else{
  //       this.user=null;
  //     }
  //   })
  //   }
}

