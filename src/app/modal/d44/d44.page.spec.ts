import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D44Page } from './d44.page';

describe('D44Page', () => {
  let component: D44Page;
  let fixture: ComponentFixture<D44Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D44Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D44Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
