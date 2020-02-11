import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R22Page } from './r22.page';

describe('R22Page', () => {
  let component: R22Page;
  let fixture: ComponentFixture<R22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R22Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
