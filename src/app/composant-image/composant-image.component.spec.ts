import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantImageComponent } from './composant-image.component';

describe('ComposantImageComponent', () => {
  let component: ComposantImageComponent;
  let fixture: ComponentFixture<ComposantImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
