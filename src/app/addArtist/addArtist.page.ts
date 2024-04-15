import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonSelectOption, IonButton, IonInput, IonTextarea, IonCheckbox, IonToast } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from '../services/artist.service';
import Artist from '../models/artist.model';

@Component({
  selector: 'app-add-artist',
  templateUrl: './addArtist.page.html',
  styleUrls: ['./addArtist.page.scss'],
  standalone: true,
  providers: [ArtistService],
  imports: [IonToast, HttpClientModule, IonCheckbox, IonTextarea, IonInput, IonButton, IonSelectOption, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddArtistPage implements OnInit {
  endpoint: string = 'ArtGalley';
  artistForm: FormGroup | any;
  genderOptions = ['Select Gender', 'Male', 'Female', 'Other'];
  artworkTypeOptions = ['Select Artwork Type', 'painting', 'sculpture', 'photograph', 'video art', 'digital art', 'printmaking'];
  editData: any = {};
  toast: boolean = true;
  toastMsg: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private service: ArtistService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadData();

  }

  initForm(): void {
    this.artistForm = this.formBuilder.group({
      artist_id: [''],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      artwork_type: ['', Validators.required],
      contact_info: [''],
      exhibition_date: ['', Validators.required],
      special_notes: [''],
      is_featured_artist: [false]
    });
  }

  // form populate with data received from a previous page if the data is valid
  loadData() {
    // getting data from router history
    const data = history.state.data;
    this.editData = data;

    if (data && data.artist_id != '' && data.artist_id != 0) {
      // parsing date in valid formats to populate in date pickers
      const dobDate = new Date(data.dob);
      const exhibitionDate = new Date(data.exhibition_date);

      // update form object to populate the form with edit state of artist
      this.artistForm.patchValue({
        ...data,
        dob: new Date(dobDate).toISOString().split('T')[0], // Convert to ISO string
        exhibition_date: new Date(exhibitionDate).toISOString().split('T')[0] // Convert to ISO string
      });
    }
  }

  /**
   * Add Artist id there's data available in EditData variable
   * Else? Update Artist Data
   */
  onSubmit(): void {
    if (this.artistForm.valid && !this.editData) {
      this.service.createArtist(this.artistForm.value).subscribe(res => {
        this.router.navigate(['/artists/all']);
      }, error => {
        this.toast = true;
        this.toastMsg = error;
      });
    }
    else {
      this.service.updateArtist(this.artistForm.value.name, this.artistForm.value).subscribe(res => {
        this.router.navigate(['/artists/all']);
      }, error => {
        this.toast = true;
        this.toastMsg = error;
      });
    }
  }
}
