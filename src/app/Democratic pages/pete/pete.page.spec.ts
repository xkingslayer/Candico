import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetePage } from './pete.page';

describe('PetePage', () => {
  let component: PetePage;
  let fixture: ComponentFixture<PetePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
