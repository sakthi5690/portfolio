import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  private dataService = inject(PortfolioDataService);
  readonly personalInfo = this.dataService.personalInfo;

  currentRoleText = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimeoutId: any;

  floatingBadges = [
    { label: 'Angular', icon: 'shield', color: '#dd0031', top: '10%', left: '-8%' },
    { label: 'React', icon: 'atom', color: '#61dafb', top: '22%', right: '-10%' },
    { label: 'Node.js', icon: 'server', color: '#68a063', bottom: '24%', left: '-10%' },
    { label: 'Python', icon: 'code', color: '#3776ab', bottom: '8%', right: '-6%' }
  ];

  ngOnInit(): void {
    this.typeRole();
  }

  ngOnDestroy(): void {
    if (this.typingTimeoutId) {
      clearTimeout(this.typingTimeoutId);
    }
  }

  private typeRole(): void {
    const roles = this.personalInfo.roles;
    const currentRole = roles[this.roleIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.currentRoleText.set(currentRole.substring(0, this.charIndex));
    } else {
      this.charIndex++;
      this.currentRoleText.set(currentRole.substring(0, this.charIndex));
    }

    let typingSpeed = this.isDeleting ? 40 : 90;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      typingSpeed = 1800; // Pause at end of text
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing new word
    }

    this.typingTimeoutId = setTimeout(() => this.typeRole(), typingSpeed);
  }

  scrollToProjects(): void {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToResume(): void {
    const el = document.getElementById('resume');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
