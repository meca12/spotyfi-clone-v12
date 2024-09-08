import * as dataRaw from '../../../data/tracks.json';

import { Component, Input, OnInit } from '@angular/core';

import { TracksModule } from '../tracks.module';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
 mockTracksList = []
  
  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default; 
    this.mockTracksList = data; 
  }

}
