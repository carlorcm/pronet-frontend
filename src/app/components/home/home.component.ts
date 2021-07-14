import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:PrincipalService,private router:Router) { }

  ngOnInit(): void {
      
  }

  gotoMonedas(){
    this.router.navigate(["/monedas"]);
  }

}
