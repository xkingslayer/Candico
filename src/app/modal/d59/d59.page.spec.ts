import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D59Page } from './d59.page';

describe('D59Page', () => {
  let component: D59Page;
  let fixture: ComponentFixture<D59Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D59Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D59Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
