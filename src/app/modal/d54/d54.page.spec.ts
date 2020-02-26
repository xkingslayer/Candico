import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D54Page } from './d54.page';

describe('D54Page', () => {
  let component: D54Page;
  let fixture: ComponentFixture<D54Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D54Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D54Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
