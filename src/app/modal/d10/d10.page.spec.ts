import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D10Page } from './d10.page';

describe('D10Page', () => {
  let component: D10Page;
  let fixture: ComponentFixture<D10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
