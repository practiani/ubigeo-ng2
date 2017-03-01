import { Component, OnInit } from '@angular/core';
import { UbigeoService } from '../../services/ubigeo.service';

@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styleUrls: ['./ubigeo.component.css'],
  providers: [UbigeoService]
})
export class UbigeoComponent implements OnInit {

  list: Ubigeo[];

  constructor(private ubigeoService: UbigeoService) {
    this.ubigeoService.getPosts().subscribe(r => {
      this.list = r.results;
      //console.log('list' + JSON.stringify(this.list));
    });

  }

  ngOnInit() {
  }



}

interface Ubigeo {
  id: number;
  nombre: string;
  codigo: string;
// tslint:disable-next-line:eofline
}