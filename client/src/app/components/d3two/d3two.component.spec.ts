import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3twoComponent } from './d3two.component';

describe('D3twoComponent', () => {
  let component: D3twoComponent;
  let fixture: ComponentFixture<D3twoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3twoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3twoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
