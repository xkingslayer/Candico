import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D63Page } from './d63.page';

describe('D63Page', () => {
  let component: D63Page;
  let fixture: ComponentFixture<D63Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D63Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D63Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
