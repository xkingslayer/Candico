import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D13Page } from './d13.page';

describe('D13Page', () => {
  let component: D13Page;
  let fixture: ComponentFixture<D13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
