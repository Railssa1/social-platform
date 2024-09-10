import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { UserService } from "./user/user.service";

describe('AppComponent', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    userService = TestBed.inject(UserService);
  });

  it('should be create', () => {
    expect(userService).toBeTruthy();
  });

  it('should get users', () => {
    userService.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0)
    })
  });
});
