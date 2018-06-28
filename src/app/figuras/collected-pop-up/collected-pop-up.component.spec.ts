import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedPopUpComponent } from './collected-pop-up.component';

describe('CollectedPopUpComponent', () => {
  let component: CollectedPopUpComponent;
  let fixture: ComponentFixture<CollectedPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectedPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
