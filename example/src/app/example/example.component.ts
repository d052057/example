import { Component, computed, inject, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-example',
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnInit {
  public service = inject(DataService);
  videoBool: boolean = false;
  ngOnInit() {
    this.videoBool = true;
    this.service.apiURL.set("json/menus/videos/menu.json")
  }
  data = computed(() => {
    return this.service.dataResource.value()
  });
  buttonVClick(): void {
    this.service.apiURL.set("json/menus/videos/menu.json")
  }
  buttonMClick(): void {
    this.service.apiURL.set("json/menus/movies/menu.json")
  }
}
