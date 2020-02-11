import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D14Page } from './d14.page';

describe('D14Page', () => {
  let component: D14Page;
  let fixture: ComponentFixture<D14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
