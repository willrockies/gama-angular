import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-contador-botoes",
  templateUrl: "./contador-botoes.component.html",
  styleUrls: ["./contador-botoes.component.css"]
})
export class ContadorBotoesComponent implements OnInit {
  contador = 0;

  constructor(public todoService: TodoService) {}

  ngOnInit() {
    this.todoService.contador.subscribe(value => {
      //console.log(value);
      this.contador = value;
    });
  }
}
