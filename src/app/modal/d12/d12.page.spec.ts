import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { D12Page } from './d12.page';

describe('D12Page', () => {
  let component: D12Page;
  let fixture: ComponentFixture<D12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(D12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
