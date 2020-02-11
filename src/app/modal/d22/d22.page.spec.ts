import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D22Page } from './d22.page';

describe('D22Page', () => {
  let component: D22Page;
  let fixture: ComponentFixture<D22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D22Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
