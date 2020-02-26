import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D57Page } from './d57.page';

describe('D57Page', () => {
  let component: D57Page;
  let fixture: ComponentFixture<D57Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D57Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D57Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
