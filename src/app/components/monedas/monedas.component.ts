import { Component, OnInit } from '@angular/core';
import { MonedaInterface } from 'src/app/models/moneda-interface';
import { PrincipalService } from 'src/app/services/principal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent implements OnInit {

  constructor(public auth:PrincipalService) { }

  ngOnInit(): void {
    this.auth.obtnerTipoCambio().subscribe((res:any)=>{
      this.monedasArray = res;
      console.log(this.monedasArray);
      
    });

  }

  pageChanged:number=1;
  first:string="";
  second:string="";
  monedasArray: MonedaInterface[]=[];

  tipoCambioRango(){
    console.log(this.first,this.second);
    this.auth.consultarTipoCambio(this.first,this.second).subscribe((res:any)=>{
      this.monedasArray = res;
      this.alertConfirm();
    });
  }



  alertConfirm(){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tipo de Cambio consultado',
    showConfirmButton: false,
    timer: 1500
  })
}

}
