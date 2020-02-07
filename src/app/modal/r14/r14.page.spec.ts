import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R14Page } from './r14.page';

describe('R14Page', () => {
  let component: R14Page;
  let fixture: ComponentFixture<R14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
