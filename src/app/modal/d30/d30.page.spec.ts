import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D30Page } from './d30.page';

describe('D30Page', () => {
  let component: D30Page;
  let fixture: ComponentFixture<D30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D30Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
