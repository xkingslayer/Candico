import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D50Page } from './d50.page';

describe('D50Page', () => {
  let component: D50Page;
  let fixture: ComponentFixture<D50Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D50Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D50Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
