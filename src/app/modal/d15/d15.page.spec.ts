import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D15Page } from './d15.page';

describe('D15Page', () => {
  let component: D15Page;
  let fixture: ComponentFixture<D15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
