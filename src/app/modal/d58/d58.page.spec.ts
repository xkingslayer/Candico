import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D58Page } from './d58.page';

describe('D58Page', () => {
  let component: D58Page;
  let fixture: ComponentFixture<D58Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D58Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D58Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
