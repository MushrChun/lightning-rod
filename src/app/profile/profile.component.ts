import { Component, OnInit } from '@angular/core';

import { MaterialModule } from '../../material.module';
import { AuthService } from '../auth/auth.service';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private coursesService: CoursesService
  ) { }

  displayName: string;
  email: string;

  ngOnInit() {
    const currentUser = this.authService.currentUserObservable;
    if (currentUser) {
      currentUser.subscribe((user) => {

        this.displayName = user.displayName;
        this.email = user.email;
      });
    }
  }

  injectSeed() {
    this.coursesService.createSeedData();
  }

}
