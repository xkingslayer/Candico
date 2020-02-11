import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D21Page } from './d21.page';

describe('D21Page', () => {
  let component: D21Page;
  let fixture: ComponentFixture<D21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D21Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
