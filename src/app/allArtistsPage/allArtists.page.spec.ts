import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtistsPage } from './allArtists.page';

describe('Tab1Page', () => {
  let component: AllArtistsPage;
  let fixture: ComponentFixture<AllArtistsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(AllArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
