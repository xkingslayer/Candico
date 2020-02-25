import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D40Page } from './d40.page';

describe('D40Page', () => {
  let component: D40Page;
  let fixture: ComponentFixture<D40Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D40Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D40Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
