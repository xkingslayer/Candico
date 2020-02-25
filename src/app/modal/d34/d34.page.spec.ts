import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D34Page } from './d34.page';

describe('D34Page', () => {
  let component: D34Page;
  let fixture: ComponentFixture<D34Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D34Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D34Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
