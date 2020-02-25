import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D29Page } from './d29.page';

describe('D29Page', () => {
  let component: D29Page;
  let fixture: ComponentFixture<D29Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D29Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
