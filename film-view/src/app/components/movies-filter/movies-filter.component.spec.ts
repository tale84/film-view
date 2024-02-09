import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesFilterComponent } from './movies-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from '@angular/forms';
import { MovieFilter } from '../../core/models/movie-filter';

describe('MoviesFilterComponent', () => {
  let component: MoviesFilterComponent;
  let fixture: ComponentFixture<MoviesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesFilterComponent, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a FormGroup with type and name controls', () => {
    // Arrange
    // Act
    // Assert
    expect(component.moviesFilterForm).toBeInstanceOf(FormGroup);
    expect(component.moviesFilterForm.get('name')).toBeDefined();
    expect(component.moviesFilterForm.get('type')).toBeDefined();
  });

  it('should emit form value on form submission', () => {
    // Arrange
    const emitSpy = spyOn(component.submitFilter, 'emit').and.callThrough();
    const name = 'Jack reacher';
    const type = 'movie';
    
    // Act
    component.moviesFilterForm.controls['name'].setValue(name);
    component.moviesFilterForm.controls['type'].setValue(type);
    component.onSubmit();

    // Assert
    expect(emitSpy).toHaveBeenCalledWith({ name: name, type: type } as MovieFilter); // Ensure formSubmit event was emitted with expected values
  });
});
