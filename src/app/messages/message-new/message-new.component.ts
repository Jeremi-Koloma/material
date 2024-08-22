import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {

  // Formulaires
  firstFormGroup!: FormGroup;
  SecondFormGroup!: FormGroup;

  // Autocomplete variables
  priorities: string[] = ['Hight', 'Medium', 'Low'];
  departments: object[] = [
    {
      id: 1,
      name: 'Complaints'
    },
    {
      id: 2,
      name: 'Loyalty'
    },
    {
      id: 3,
      name: 'Promotions'
    }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // 1er Formulaire - VALIDATION
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required],
      priorityCtrl: ['', Validators.required],
      departmentCtrl: ['', Validators.required],
    });

    // 2ème Formulaire - VALIDATION
    this.SecondFormGroup = this.formBuilder.group({
      messageCtrl: ['', Validators.required],
    });
  }

  // Recupérons le nom de department Object
  getDepartmentName(department: any) {
    return department ? department['name'] : undefined;
  }
}
