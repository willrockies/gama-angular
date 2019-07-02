import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Wilson";
  sobrenome = "Alves";
  contador = 0;
  items = ["2", "3", "4", "5"];
  ngOnInit() {
    setInterval(() => {
      this.title = "Wilson";
    }, 1000);
  }

  novoItem() {
    const text = prompt("Digite um nome");

    this.items.push(text);
  }
}
