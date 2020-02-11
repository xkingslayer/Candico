import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D18Page } from './d18.page';

describe('D18Page', () => {
  let component: D18Page;
  let fixture: ComponentFixture<D18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D18Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
