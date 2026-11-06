import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  private dataService = inject(PortfolioDataService);
  readonly personalInfo = this.dataService.personalInfo;

  resumeModalOpen = signal(false);

  openResumePreview(): void {
    if (this.personalInfo.resume.available) {
      window.open(this.personalInfo.resume.filePath, '_blank');
    } else {
      this.resumeModalOpen.set(true);
    }
  }

  downloadResume(): void {
    if (this.personalInfo.resume.available) {
      const link = document.createElement('a');
      link.href = this.personalInfo.resume.filePath;
      link.download = this.personalInfo.resume.fileName;
      link.click();
    } else {
      this.resumeModalOpen.set(true);
    }
  }

  closeModal(): void {
    this.resumeModalOpen.set(false);
  }
}
