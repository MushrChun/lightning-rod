import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }
