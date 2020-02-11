import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D17Page } from './d17.page';

describe('D17Page', () => {
  let component: D17Page;
  let fixture: ComponentFixture<D17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D17Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
