import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndependantsPage } from './independants.page';

describe('IndependantsPage', () => {
  let component: IndependantsPage;
  let fixture: ComponentFixture<IndependantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndependantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
