import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BloomPage } from './bloom.page';

describe('BloomPage', () => {
  let component: BloomPage;
  let fixture: ComponentFixture<BloomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BloomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
