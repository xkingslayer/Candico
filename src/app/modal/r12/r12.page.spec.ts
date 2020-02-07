import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R12Page } from './r12.page';

describe('R12Page', () => {
  let component: R12Page;
  let fixture: ComponentFixture<R12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
