import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R15Page } from './r15.page';

describe('R15Page', () => {
  let component: R15Page;
  let fixture: ComponentFixture<R15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
