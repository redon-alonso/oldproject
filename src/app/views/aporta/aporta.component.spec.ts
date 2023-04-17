import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportaComponent } from './aporta.component';

describe('AportaComponent', () => {
  let component: AportaComponent;
  let fixture: ComponentFixture<AportaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AportaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AportaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
