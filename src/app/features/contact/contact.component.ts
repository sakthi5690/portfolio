import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private dataService = inject(PortfolioDataService);
  private fb = inject(FormBuilder);

  readonly personalInfo = this.dataService.personalInfo;

  contactForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  isSubmitting = signal(false);
  submissionStatus = signal<'idle' | 'success' | 'ready_for_backend' | 'error'>('idle');

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    // Simulate reactive submission with clear honest status that backend can be connected:
    setTimeout(() => {
      this.isSubmitting.set(false);
      // We explicitly inform the user that the form is validated and ready for backend/service integration
      this.submissionStatus.set('ready_for_backend');
      this.contactForm.reset();
    }, 800);
  }

  resetStatus(): void {
    this.submissionStatus.set('idle');
  }
}
