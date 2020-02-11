import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D5Page } from './d5.page';

describe('D5Page', () => {
  let component: D5Page;
  let fixture: ComponentFixture<D5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
