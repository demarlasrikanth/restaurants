import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RestoService} from '../resto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert = false;
  editResto = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('')
    });

  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result) => {
      console.log('result', result);
      this.editResto = new FormGroup({
        name: new FormControl(result[`name`]),
        email: new FormControl(result[`email`]),
        address: new FormControl(result[`address`])
      });
    });
  }
  collection(): void {
    console.log(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id, this.editResto.value).subscribe((result) => {
      this.alert = true;
      console.log(result);
    });
  }
  closealert(): void{
    this.alert = false;
  }
}
