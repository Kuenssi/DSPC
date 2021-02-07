import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildSelectModalComponent } from './build-select-modal.component';

describe('BuildSelectModalComponent', () => {
  let component: BuildSelectModalComponent;
  let fixture: ComponentFixture<BuildSelectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildSelectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
