import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrumpPage } from './trump.page';

describe('TrumpPage', () => {
  let component: TrumpPage;
  let fixture: ComponentFixture<TrumpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrumpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
