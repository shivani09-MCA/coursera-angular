import { Component, Input } from '@angular/core';

import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingtask=false;
  constructor(private tasksService: TasksService){

  }

  
get selectedUsersTasks(){
  return this.tasksService.getUserTasks(this.userId);
}

onStartAddTask(){
  this.isAddingtask=true;

}
onCloseAddTask(){
  this.isAddingtask=false;

}

}
