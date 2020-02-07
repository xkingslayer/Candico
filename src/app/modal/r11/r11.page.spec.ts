import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R11Page } from './r11.page';

describe('R11Page', () => {
  let component: R11Page;
  let fixture: ComponentFixture<R11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
