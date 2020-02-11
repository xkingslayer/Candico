import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D19Page } from './d19.page';

describe('D19Page', () => {
  let component: D19Page;
  let fixture: ComponentFixture<D19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
