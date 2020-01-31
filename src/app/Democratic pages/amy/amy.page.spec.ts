import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmyPage } from './amy.page';

describe('AmyPage', () => {
  let component: AmyPage;
  let fixture: ComponentFixture<AmyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
