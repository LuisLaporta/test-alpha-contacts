import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-option',
  imports: [],
  templateUrl: './radio-option.html',
  styleUrl: './radio-option.css'
})
export class RadioOption {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: string = 'checkbox';
  @Input() label: string  = '';
  @Input() checked: boolean = false;
}
