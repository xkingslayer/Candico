import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D48Page } from './d48.page';

describe('D48Page', () => {
  let component: D48Page;
  let fixture: ComponentFixture<D48Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D48Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D48Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
