/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UbigeoComponent } from './ubigeo.component';

describe('UbigeoComponent', () => {
  let component: UbigeoComponent;
  let fixture: ComponentFixture<UbigeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbigeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbigeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
