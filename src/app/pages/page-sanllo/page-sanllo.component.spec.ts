import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSanlloComponent } from './page-sanllo.component';

describe('PageSanlloComponent', () => {
  let component: PageSanlloComponent;
  let fixture: ComponentFixture<PageSanlloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSanlloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSanlloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
