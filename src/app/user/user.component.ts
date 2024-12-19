import { Component, computed, EventEmitter, input, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!:boolean;
  // avatar= input.required<string>();
  // name = input.required<string>();
  // id= input.required<string>();
  @Output() select = new EventEmitter<string>();

  // imagePath = computed(()=>{
  //   return 'assets/users/'+ this.avatar();
  // })

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  } 

  onSelectUser(){
    this.select.emit(this.user.id);
    
  }
}
