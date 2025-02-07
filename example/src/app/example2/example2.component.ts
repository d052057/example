import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-example2',
  imports:[],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.css'
})
export class Example2Component implements OnInit {
  public service = inject(DataService);

  ngOnInit() {
    this.service.videoBool.set(true);
  }
  data = computed(
    () => {
      if (this.service.videoBool()) {
        return this.service.dataVResource.value()
      }
      return this.service.dataMResource.value()
    }
  )
  buttonVClick(): void {
    this.service.videoBool.set(true)
  }
  buttonMClick(): void {
    this.service.videoBool.set(false)
  }
}
