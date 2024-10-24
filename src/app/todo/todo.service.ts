import {Injectable} from '@angular/core';
import {ToDoModel} from './todo.model';

@Injectable({
	providedIn: 'root'
})
export class TodoService {

	private taskTable: ToDoModel[] = [];

	get allTasks() {
		return this.taskTable;
	}

	addTask(taskData: ToDoModel) {
		this.taskTable.push({
			id: new Date().getTime().toString(),
			title: taskData.title,
			isCompleted: false,
		});
		console.log('Task added: ' + taskData.title);
	}

	// addTask(taskData: { title: string }) {
	// 	const newTask: ToDoModel = {
	// 		...taskData,
	// 		id: new Date().getTime().toString(),
	// 		isCompleted: false,
	// 	};
	// 	this.taskTable = [...this.taskTable, newTask];
	//
	// 	console.log('Task added: ' + taskData.title);
	// }

}
