import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D38Page } from './d38.page';

describe('D38Page', () => {
  let component: D38Page;
  let fixture: ComponentFixture<D38Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D38Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D38Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
