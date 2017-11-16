import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { NavBarComponent } from './shell/nav-bar/nav-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './../chat/chat.module#ChatModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ShellComponent, NavBarComponent, MainContentComponent],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
