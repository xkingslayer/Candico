import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D24Page } from './d24.page';

describe('D24Page', () => {
  let component: D24Page;
  let fixture: ComponentFixture<D24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D24Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
