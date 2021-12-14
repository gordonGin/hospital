import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})


export class GalleryComponent implements OnInit {

  @Input() medicalConditions: any;
  @Input() headers = ['Medical Condition', 'Patients Number'] as string[];

  constructor() { }

  ngOnInit(): void {
  }

}
