import { Component, OnInit } from "@angular/core";
import { TodoService } from "./todo.service";
import {
  map,
  throttleTime,
  debounce,
  debounceTime,
  filter
} from "rxjs/operators";
import { Todo } from "src/typings/Todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  contador = 0;
  todos: Todo[] = [];
  constructor(public todoService: TodoService) {
    todoService.getTodos().subscribe(value => {
      this.todos = value;
    });
  }
  ngOnInit() {
    this.todoService.contador
      .pipe(
        map(x => x * 2),
        debounceTime(2000)
      )

      .subscribe(value => {
        this.contador = value;
      });
  }
}
