import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanlloNavbarComponent } from './sanllo-navbar.component';

describe('SanlloNavbarComponent', () => {
  let component: SanlloNavbarComponent;
  let fixture: ComponentFixture<SanlloNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanlloNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanlloNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
