import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})

export class ConvertidorComponent {

  cantidad = 0;
  tengo ='DOLAR';
  quiero = 'EURO';
  total = 0;

  monedas: string[] = ['DOLAR', 'EURO', 'LIBRA']


  convertir() {

    switch(this.tengo){
      case 'DOLAR':
        if(this.quiero === 'DOLAR'){
          this.total = this.cantidad;
        }

        if(this.quiero === 'EURO'){
          this.total = this.cantidad * 0.84;
        }

        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.75;
        }
      break;

      case 'EURO':
        if(this.quiero === 'DOLAR'){
          this.total = this.cantidad * 1.20;
        }

        if(this.quiero === 'EURO'){
          this.total = this.cantidad;
        }

        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.90;
        }
      break;

      case 'LIBRA':
        if(this.quiero === 'DOLAR'){
          this.total = this.cantidad * 1.33;
        }

        if(this.quiero === 'EURO'){
          this.total = this.cantidad * 1.11;
        }

        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
      break;

    }
  }

}
