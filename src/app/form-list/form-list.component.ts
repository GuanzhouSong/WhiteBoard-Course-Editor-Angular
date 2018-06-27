import { Component, OnInit } from '@angular/core';
import {FormWidgetServiceClient} from "../services/formWidget.service.client";

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {

  constructor(private formService: FormWidgetServiceClient) { }

  forms = [];

  ngOnInit() {
    this.formService.findFormWidgets()
      .then(forms => this.forms = forms);
  }

}
