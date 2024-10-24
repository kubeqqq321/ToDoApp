import {Component, inject, Input} from '@angular/core';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCheckbox} from '@angular/material/checkbox';
import {TodoService} from '../../todo.service';
import {ToDoModel} from '../../todo.model';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [
    MatListItem,
    MatCheckbox,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatList,
    MatIcon,
    NgIf
  ],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {

  @Input({required: true}) task!: ToDoModel;
  private todoService = inject(TodoService);


  onChecked(task: ToDoModel) {
    switch (task.isCompleted) {
      case false:
        task.isCompleted = true;
        break;
      default:
        task.isCompleted = false;
    }
  }
}
