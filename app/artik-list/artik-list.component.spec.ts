import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikListComponent } from './artik-list.component';

describe('ArtikListComponent', () => {
  let component: ArtikListComponent;
  let fixture: ComponentFixture<ArtikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
