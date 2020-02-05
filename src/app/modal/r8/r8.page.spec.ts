import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R8Page } from './r8.page';

describe('R8Page', () => {
  let component: R8Page;
  let fixture: ComponentFixture<R8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
