import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D62Page } from './d62.page';

describe('D62Page', () => {
  let component: D62Page;
  let fixture: ComponentFixture<D62Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D62Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D62Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
