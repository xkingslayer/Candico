import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepublicansPage } from './republicans.page';

describe('RepublicansPage', () => {
  let component: RepublicansPage;
  let fixture: ComponentFixture<RepublicansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepublicansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
