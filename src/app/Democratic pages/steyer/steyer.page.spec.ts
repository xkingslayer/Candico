import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SteyerPage } from './steyer.page';

describe('SteyerPage', () => {
  let component: SteyerPage;
  let fixture: ComponentFixture<SteyerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteyerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SteyerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
