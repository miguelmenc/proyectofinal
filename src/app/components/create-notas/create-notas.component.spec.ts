import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNotasComponent } from './create-notas.component';

describe('CreateNotasComponent', () => {
  let component: CreateNotasComponent;
  let fixture: ComponentFixture<CreateNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
