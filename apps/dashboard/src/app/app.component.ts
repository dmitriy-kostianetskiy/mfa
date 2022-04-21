import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@mfe/shared/data-access-user';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'mfe-root',
  template: `
    <div class="dashboard-nav">Admin Dashboard</div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
  styles: [``],
})
export class AppComponent implements OnInit {
  public readonly isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // TODO: unsubscribe on destroy
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('');
        }
      });
  }
}
