import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})


export class GalleryComponent implements OnInit {

  constructor() { }
  @Input() medicalConditions: any;

  ngOnInit(): void {
  }

}
