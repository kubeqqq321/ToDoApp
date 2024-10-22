import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {WrapperElementComponent} from '../wrapper-element/wrapper-element.component';


@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormField,
    MatInput,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatLabel,
    MatDivider,
    FormsModule,
    WrapperElementComponent,
  ],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent {
  value = 'Clear me';

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    return true;
  }
}
