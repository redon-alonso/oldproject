import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeCardComponent } from './arcade-card.component';

describe('ArcadeCardComponent', () => {
  let component: ArcadeCardComponent;
  let fixture: ComponentFixture<ArcadeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcadeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcadeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
