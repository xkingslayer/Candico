import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D49Page } from './d49.page';

describe('D49Page', () => {
  let component: D49Page;
  let fixture: ComponentFixture<D49Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D49Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D49Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
