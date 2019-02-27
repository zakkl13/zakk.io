import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyLinkComponent } from './key-link.component';

describe('KeyLinkComponent', () => {
  let component: KeyLinkComponent;
  let fixture: ComponentFixture<KeyLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
