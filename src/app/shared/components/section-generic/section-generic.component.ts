import { Component, Input, OnInit } from '@angular/core';

import { TRackModels } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TRackModels> = []; 
  constructor() { }

  ngOnInit(): void {
  }

}
