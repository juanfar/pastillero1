import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastilleroComponent } from './pastillero.component';

describe('PastilleroComponent', () => {
  let component: PastilleroComponent;
  let fixture: ComponentFixture<PastilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastilleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
