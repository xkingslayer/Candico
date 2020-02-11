import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D7Page } from './d7.page';

describe('D7Page', () => {
  let component: D7Page;
  let fixture: ComponentFixture<D7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
