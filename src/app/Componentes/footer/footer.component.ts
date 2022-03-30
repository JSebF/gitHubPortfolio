import { Component, OnInit } from '@angular/core';
import{ InfopaginaService } from '../../servicio/infopagina.service';
import { InfoPag } from '../interface/infoPag';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  yiar: any = new Date().getFullYear();
  infoPag : InfoPag = {};

  constructor(public infoService: InfopaginaService) { 

    }
  ngOnInit(): void {
    this.infoService.getinfoPag()
    .subscribe((resp: any) => {
      console.log (resp);
      this.infoPag = resp;
    });
  }

}
