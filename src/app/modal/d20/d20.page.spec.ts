import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D20Page } from './d20.page';

describe('D20Page', () => {
  let component: D20Page;
  let fixture: ComponentFixture<D20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D20Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
