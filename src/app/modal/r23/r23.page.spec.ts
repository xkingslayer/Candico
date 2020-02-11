import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R23Page } from './r23.page';

describe('R23Page', () => {
  let component: R23Page;
  let fixture: ComponentFixture<R23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R23Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
