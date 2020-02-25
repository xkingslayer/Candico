import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D31Page } from './d31.page';

describe('D31Page', () => {
  let component: D31Page;
  let fixture: ComponentFixture<D31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D31Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
