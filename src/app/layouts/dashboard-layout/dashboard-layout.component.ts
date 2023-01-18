import { AppFacade } from './../../core/facades/app.facades';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
  providers : [AppFacade]
})
export class DashboardLayoutComponent implements OnInit,AfterViewInit {

  @ViewChild("sideBar",{static:false}) sideBar ?: ElementRef;
  color ?: string;

  constructor(private router  : Router  , private appFacade : AppFacade , private Render : Renderer2){

  }
  logout() {
    this.router.navigate(["/login"]);
  }

  ngOnInit(): void {
    this.appFacade.get('preference').subscribe((response)=>{
      this.color = JSON.parse(response).color;
    })


  }

  ngAfterViewInit(): void {
    this.Render.setStyle(this.sideBar?.nativeElement,'background',!!this.color ? this.color : "black")
  }
}
