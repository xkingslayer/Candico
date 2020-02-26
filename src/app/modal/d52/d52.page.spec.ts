import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D52Page } from './d52.page';

describe('D52Page', () => {
  let component: D52Page;
  let fixture: ComponentFixture<D52Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D52Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D52Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
