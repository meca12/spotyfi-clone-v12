import { CardPlayerComponent } from './components/card-player/card-player.component';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { NgModule } from '@angular/core';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SidebarComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlaylistHeaderComponent,
    PlayListBodyComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SidebarComponent, 
    MediaPlayerComponent, 
    CardPlayerComponent, 
    SectionGenericComponent, 
    PlaylistHeaderComponent,
    PlayListBodyComponent
  ]
  
})
export class SharedModule { }
