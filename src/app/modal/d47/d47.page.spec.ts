import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D47Page } from './d47.page';

describe('D47Page', () => {
  let component: D47Page;
  let fixture: ComponentFixture<D47Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D47Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D47Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
