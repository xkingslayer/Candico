import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D35Page } from './d35.page';

describe('D35Page', () => {
  let component: D35Page;
  let fixture: ComponentFixture<D35Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D35Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D35Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
