import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D64Page } from './d64.page';

describe('D64Page', () => {
  let component: D64Page;
  let fixture: ComponentFixture<D64Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D64Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D64Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
