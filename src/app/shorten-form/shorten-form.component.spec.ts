import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenFormComponent } from './shorten-form.component';

describe('ShortenFormComponent', () => {
  let component: ShortenFormComponent;
  let fixture: ComponentFixture<ShortenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
