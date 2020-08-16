import { Task } from './../task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task: Task = {
    id: 1,
    name: 'Task 1'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
