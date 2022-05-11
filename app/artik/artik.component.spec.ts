import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikComponent } from './artik.component';

describe('ArtikComponent', () => {
  let component: ArtikComponent;
  let fixture: ComponentFixture<ArtikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
