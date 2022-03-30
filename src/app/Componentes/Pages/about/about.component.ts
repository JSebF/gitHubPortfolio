import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from 'src/app/servicio/infopagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo : any = "";
  constructor( public infoService: InfopaginaService) { }

  ngOnInit(): void {

    this.infoService.getinfoEquipo()
    .subscribe((resp: any) => {
      console.log(resp);
      this.equipo = resp;
    });
  }

}
