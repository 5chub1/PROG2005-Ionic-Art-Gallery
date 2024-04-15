import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchArtistsPage } from './searchArtists.page';

describe('Tab3Page', () => {
  let component: SearchArtistsPage;
  let fixture: ComponentFixture<SearchArtistsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(SearchArtistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
