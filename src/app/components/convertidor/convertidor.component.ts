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

}
