import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D28Page } from './d28.page';

describe('D28Page', () => {
  let component: D28Page;
  let fixture: ComponentFixture<D28Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D28Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
