import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D4Page } from './d4.page';

describe('D4Page', () => {
  let component: D4Page;
  let fixture: ComponentFixture<D4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
