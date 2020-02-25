import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D36Page } from './d36.page';

describe('D36Page', () => {
  let component: D36Page;
  let fixture: ComponentFixture<D36Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D36Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D36Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
