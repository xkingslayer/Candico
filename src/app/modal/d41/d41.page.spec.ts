import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D41Page } from './d41.page';

describe('D41Page', () => {
  let component: D41Page;
  let fixture: ComponentFixture<D41Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D41Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D41Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
