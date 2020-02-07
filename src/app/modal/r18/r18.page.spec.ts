import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R18Page } from './r18.page';

describe('R18Page', () => {
  let component: R18Page;
  let fixture: ComponentFixture<R18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R18Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
