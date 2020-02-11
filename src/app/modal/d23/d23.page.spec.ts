import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D23Page } from './d23.page';

describe('D23Page', () => {
  let component: D23Page;
  let fixture: ComponentFixture<D23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D23Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
