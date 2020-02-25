import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D37Page } from './d37.page';

describe('D37Page', () => {
  let component: D37Page;
  let fixture: ComponentFixture<D37Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D37Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D37Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
