import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {RestoService} from '../resto.service';


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert = false;
  addResto = new FormGroup(
    {
      name: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl('')

    });

  constructor(private Resto: RestoService) {
  }

  ngOnInit(): void {
  }

  collectresto(): void {
    // console.warn(this.addResto.value);
    this.Resto.saveResto(this.addResto.value).subscribe((result) => {
      this.alert = true;
      this.addResto.reset();
    });
  }

  closealert(): void {
    this.alert = false;
  }

}

