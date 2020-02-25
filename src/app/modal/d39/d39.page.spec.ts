import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D39Page } from './d39.page';

describe('D39Page', () => {
  let component: D39Page;
  let fixture: ComponentFixture<D39Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D39Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D39Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
