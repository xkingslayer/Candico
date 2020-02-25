import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D32Page } from './d32.page';

describe('D32Page', () => {
  let component: D32Page;
  let fixture: ComponentFixture<D32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D32Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
