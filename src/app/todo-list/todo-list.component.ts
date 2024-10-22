import {Component} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {WrapperElementComponent} from '../wrapper-element/wrapper-element.component';
import {FormsModule} from '@angular/forms';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCheckbox} from '@angular/material/checkbox';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatCardHeader,
    MatFormField,
    MatCardActions,
    MatButton,
    MatInput,
    MatCard,
    MatCardTitle,
    MatLabel,
    MatCardContent,
    WrapperElementComponent,
    FormsModule,
    MatList,
    MatListItem,
    MatCheckbox,
    NgForOf,

  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  // tablica zawierająca przyładowe zadania
  tasks = [
    {title: 'Zadanie 1', completed: false},
    {title: 'Zadanie 2', completed: true},
    {title: 'Zadanie 3', completed: false},
  ];

  onSubmit() {

  }
}
