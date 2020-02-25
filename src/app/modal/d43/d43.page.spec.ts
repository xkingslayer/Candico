import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D43Page } from './d43.page';

describe('D43Page', () => {
  let component: D43Page;
  let fixture: ComponentFixture<D43Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D43Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
