import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SidebarComponent, 
    MediaPlayerComponent
  ]
  
})
export class SharedModule { }
