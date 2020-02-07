import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R13Page } from './r13.page';

describe('R13Page', () => {
  let component: R13Page;
  let fixture: ComponentFixture<R13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
