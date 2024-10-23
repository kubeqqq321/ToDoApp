import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {WrapperElementComponent} from '../../wrapper-element/wrapper-element.component';
import {FormsModule} from '@angular/forms';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCheckbox} from '@angular/material/checkbox';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatBadge} from '@angular/material/badge';
import {MatTooltip} from '@angular/material/tooltip';
import {ToDoModel} from '../todo.model';

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
    MatIcon,
    NgIf,
    MatBadge,
    MatTooltip,

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
    {title: 'Zadanie 4', completed: false},
    {title: 'Zadanie 5', completed: false},
    {title: 'Zadanie 6', completed: false},
    {title: 'Zadanie 7', completed: false},
  ];

}





