import { Component, OnInit } from '@angular/core';
import { RestoService} from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto: RestoService) { }
collection = {};
  ngOnInit(): void
  {
    this.resto.getList().subscribe((result) => {
       this.collection = result;
  });
  }


}
