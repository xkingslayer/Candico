import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D53Page } from './d53.page';

describe('D53Page', () => {
  let component: D53Page;
  let fixture: ComponentFixture<D53Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D53Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D53Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
