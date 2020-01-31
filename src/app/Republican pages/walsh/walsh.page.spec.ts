import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalshPage } from './walsh.page';

describe('WalshPage', () => {
  let component: WalshPage;
  let fixture: ComponentFixture<WalshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalshPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
