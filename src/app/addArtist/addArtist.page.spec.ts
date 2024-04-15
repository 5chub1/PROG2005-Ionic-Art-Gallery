import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddArtistPage } from './addArtist.page';

describe('AddArtistPage', () => {
  let component: AddArtistPage;
  let fixture: ComponentFixture<AddArtistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
