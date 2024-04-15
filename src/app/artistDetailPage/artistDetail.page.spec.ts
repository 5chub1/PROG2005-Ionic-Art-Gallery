import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailPage } from './artistDetail.page';

describe('Tab2Page', () => {
  let component: ArtistDetailPage;
  let fixture: ComponentFixture<ArtistDetailPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ArtistDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
