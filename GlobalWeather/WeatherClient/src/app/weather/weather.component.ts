import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private weatherForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.weatherForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      searchGroup: this.fb.group({
        country: [null],
        city: [null, [Validators.required]]
      })
    })
  }
}
