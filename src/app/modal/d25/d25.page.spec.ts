import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D25Page } from './d25.page';

describe('D25Page', () => {
  let component: D25Page;
  let fixture: ComponentFixture<D25Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D25Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
