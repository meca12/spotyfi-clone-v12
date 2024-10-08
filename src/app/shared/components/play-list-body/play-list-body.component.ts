import * as dataRaw from '../../../data/tracks.json';

import { Component, OnInit } from '@angular/core';

import { TRackModels } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  tracks: TRackModels[] = [];

  optionSort: {property: string | null, order: string}  = {property:null, order:'asc'}
  constructor() { }
  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default; 
    this.tracks = data; 
 
    
  }

  orderFilter(property:string) {
    const { order } = this.optionSort; 
    this.optionSort = {
      property: property, 
      order: order === 'asc' ? 'desc' : 'asc'
    }

    console.log(this.optionSort)
  }

}
