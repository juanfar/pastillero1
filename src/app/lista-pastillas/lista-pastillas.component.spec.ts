import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPastillasComponent } from './lista-pastillas.component';

describe('ListaPastillasComponent', () => {
  let component: ListaPastillasComponent;
  let fixture: ComponentFixture<ListaPastillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPastillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPastillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
