import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  standalone: true, // caso você esteja usando Angular standalone
  templateUrl: './btn-primary.html',
  styleUrls: ['./btn-primary.scss'] // <- aqui estava "styleUrl" no singular, o correto é **styleUrls**
})
export class BtnPrimary {
  @Input() label: string = 'Get Started';
  @Input() color: string = 'primary';
  @Input() type: 'button' | 'submit' = 'button';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
