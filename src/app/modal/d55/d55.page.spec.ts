import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D55Page } from './d55.page';

describe('D55Page', () => {
  let component: D55Page;
  let fixture: ComponentFixture<D55Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D55Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D55Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
