import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId! :string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle ='';
  enteredSummary ='';
  enteredDate ='';

  constructor(private tasksService: TasksService){

  }
  onCancel(){
    this.close.emit();

  }
  onSubmit(){
   this.tasksService.addTask({
    title: this.enteredTitle,
    summary:this.enteredSummary,
    date:this.enteredDate
   },this.userId);
   this.close.emit();

  }

}
