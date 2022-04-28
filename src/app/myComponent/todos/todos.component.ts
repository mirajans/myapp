import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {


 todos:Todo[];
  constructor() {
   this.todos =[
     {
       sno:2,
       title:"this is title",
       desc:"this is desc",
      active:true,
     },
     {
      sno:4,
      title:"this is title4",
      desc:"this is desc4",
     active:true,
    },{
      sno:5,
      title:"this is title5",
      desc:"this is desc5",
     active:true,
    }
   ]
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)

  }
  addTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.push(todo)

  }


}
