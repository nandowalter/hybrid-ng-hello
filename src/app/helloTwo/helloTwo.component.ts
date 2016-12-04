import { Component } from '@angular/core';
import '../../../public/css/styles.css';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { NameService } from '../name.service.def';

@Component({
  selector: 'hello-two',
  templateUrl: './helloTwo.component.html',
  styleUrls: ['./helloTwo.component.css']
})
export class HelloTwoComponent implements OnInit {
  name: string;

  constructor(@Inject(NameService) private nameService:NameService){

  }

  ngOnInit(): void {
    this.name = this.nameService.getName();
  }
}
