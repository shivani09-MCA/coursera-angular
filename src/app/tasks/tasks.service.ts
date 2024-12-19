import { Injectable } from "@angular/core";
import { NewTaskData } from "./new-task/new-task.model";

@Injectable({providedIn: 'root'})
export class TasksService{

   private  tasks=[
        {
          id:'t1',
          userId:'u1',
          title: 'Create Webmethods and integrate with Java.',
          Summary:'For Spec Destination create web methods and complete java and make it workable with frontend.',
          dueDate: '2024-12-10'
        },
        {
          id:'t1',
          userId:'u2',
          title: 'Create Webmethods and integrate with Java.',
          Summary:'For Spec Destination create web methods and complete java and make it workable with frontend.',
          dueDate: '2024-12-10'
        },
        {
          id:'t3',
          userId:'u1',
          title: 'Create Webmethods and integrate with Java.',
          Summary:'For Spec Destination create web methods and complete java and make it workable with frontend.',
          dueDate: '2024-12-10'
        },
        {
          id:'t2',
          userId:'u1',
          title: 'Create Webmethods and integrate with Java.',
          Summary:'For Spec Destination create web methods and complete java and make it workable with frontend.',
          dueDate: '2024-12-10'
        },
    ];

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string){
        return this.tasks.filter((task)=> task.userId===userId); 
    }
    addTask(taskData: NewTaskData,userId:string){
        this.tasks.push({
            id:new Date().getTime().toString(),
            userId:userId,
            title: taskData.title,
            Summary:taskData.summary,
            dueDate: taskData.date
        
          });
          this.saveTasks();
    }
    removeTask(id: string){
        this.tasks=this.tasks.filter((task)=>task.id!==id);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }


}