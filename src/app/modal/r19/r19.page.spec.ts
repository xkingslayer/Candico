import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R19Page } from './r19.page';

describe('R19Page', () => {
  let component: R19Page;
  let fixture: ComponentFixture<R19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
