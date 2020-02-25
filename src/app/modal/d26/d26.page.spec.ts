import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D26Page } from './d26.page';

describe('D26Page', () => {
  let component: D26Page;
  let fixture: ComponentFixture<D26Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D26Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
