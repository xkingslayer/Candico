import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D60Page } from './d60.page';

describe('D60Page', () => {
  let component: D60Page;
  let fixture: ComponentFixture<D60Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D60Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D60Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
