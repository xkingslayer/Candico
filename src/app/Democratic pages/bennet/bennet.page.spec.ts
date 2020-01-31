import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BennetPage } from './bennet.page';

describe('BennetPage', () => {
  let component: BennetPage;
  let fixture: ComponentFixture<BennetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BennetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BennetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
