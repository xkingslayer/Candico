import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D56Page } from './d56.page';

describe('D56Page', () => {
  let component: D56Page;
  let fixture: ComponentFixture<D56Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D56Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D56Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
