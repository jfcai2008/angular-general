import { Component, OnInit,Inject,ElementRef,PLATFORM_ID,ViewChild } from '@angular/core';
import {DataCenterService} from '../../services/data-center.service';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';

declare let particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('txtUserName',{static:false}) txtUserName:ElementRef | undefined;
  userName:any;
  userPass:any;
  public error: string='';
  Login_top:any='15%';
  part_up_height:any=0;
  width:any
  constructor(@Inject(PLATFORM_ID) private platformid:Object,
    private DSS: DataCenterService,
    private auth: AuthService,
    private router: Router) { 
    let ui = this.getUserInfo()
    this.userName=ui.user_id
    this.userPass=ui.user_pw
    let height = window.innerHeight
    this.width = window.innerWidth
    this.part_up_height = (height - 248)/2
  }

  ngOnInit(): void {
    // particlesJS('particlesId', particlesConfig);
    this.showParticles();
  }
  getInt(min: number,max: number){
    return Math.floor(min + Math.random() * (max-min))
 }
  showParticles(): void{
    let pt_number = this.getInt(120,300)
    let ccs = ['#ffffff','#ce0000','#ff8eff','#53ff53','#8c8c00','#6a6ad2','#984b4b','#ffff6f','#6a6aff']
    let clr = ccs[this.getInt(0,ccs.length)]
    let shapes=['circle']
    particlesJS('particles-js',  {
        particles: {
          number: {
            value: pt_number,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: clr // '#ffffff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: true
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.5,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble'
            },
            onclick: {
              enable: false,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 100,
              line_linked: {
                opacity: 0.8
              }
            },
            bubble: {
              distance: 250,
              size: 4,
              duration: 2,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 400,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }


    );

  }

  saveUserInfo(ui: any){
    localStorage.setItem("userinfo", JSON.stringify(ui));
  }
  getUserInfo(){
    let tmp = localStorage.getItem("userinfo");
    if(tmp){
      return JSON.parse(tmp)
    }
    else{
      return {userName:'test',userPass:'123456'}
    }
  }
  async login(){
    let user={user_id:this.userName,user_pw:this.userPass}
    let res =await this.DSS.login(user)
    if(res["status"] ==true){
      this.DSS.saveValue('access_token',res["token"])
      this.saveUserInfo(user)

      let right = res["right"]
      this.DSS.loginId=this.userName
      this.DSS.userLogined=true

      this.DSS.saveObject('loginUser',res)      

          this.router.navigate(["/fund/holds"])
    }
  }
}
