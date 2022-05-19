import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data:any;
  constructor(
    private home:HomeService,
    private authServicve:AuthService
  ) { }

  ngOnInit(): void {
    this.home.getData().subscribe(res=>{
      console.log(res);
      this.data=res;
    })
  }
  logout(){
    this.authServicve.SignOut();
  }

}
