import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D33Page } from './d33.page';

describe('D33Page', () => {
  let component: D33Page;
  let fixture: ComponentFixture<D33Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D33Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
