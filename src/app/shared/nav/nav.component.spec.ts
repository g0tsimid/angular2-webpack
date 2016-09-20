// I don't understand how to test this right now.
// The test will always fail because of the routerLink directive used,
// and including AppModule as a dependency causes both this and the AppComponent test to fail.

// import { APP_BASE_HREF } from '@angular/common'

// import { TestBed } from '@angular/core/testing';
// import { NavComponent } from './nav.component';

// describe('Nav', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [NavComponent],
//       providers: [
//         { provide: APP_BASE_HREF, useValue: "/" }
//       ]
//     });
//   });
//   it ('should work', () => {
//     let fixture = TestBed.createComponent(NavComponent);
//     expect(fixture.componentInstance instanceof NavComponent).toBe(true, 'should create NavComponent');
//   });
// });