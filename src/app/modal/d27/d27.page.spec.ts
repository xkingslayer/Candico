import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D27Page } from './d27.page';

describe('D27Page', () => {
  let component: D27Page;
  let fixture: ComponentFixture<D27Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D27Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
