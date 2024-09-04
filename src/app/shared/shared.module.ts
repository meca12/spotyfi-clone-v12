import { CardPlayerComponent } from './components/card-player/card-player.component';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { NgModule } from '@angular/core';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SidebarComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SidebarComponent, 
    MediaPlayerComponent, 
    CardPlayerComponent, 
    SectionGenericComponent
  ]
  
})
export class SharedModule { }
