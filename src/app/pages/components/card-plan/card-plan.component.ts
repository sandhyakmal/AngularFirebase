import { Component, OnInit } from '@angular/core';
import { DONE, ISanllo, PLAN, TODO } from 'src/app/interfaces/i-sanllo';
import { SanlloService } from 'src/app/services/sanllo.service';

@Component({
  selector: 'app-card-plan',
  templateUrl: './card-plan.component.html',
  styleUrls: ['./card-plan.component.css']
})
export class CardPlanComponent implements OnInit {

  tasks: ISanllo[] = [];
  statusTodo: string = TODO;
  statusDone: string = DONE;

  constructor(private sanlloService: SanlloService) { }

  ngOnInit(): void {
    this.onAll();
  }

  onAll():void{
    this.sanlloService.all(PLAN).subscribe ((data:any) => {
      this.tasks = data.map((e:any) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          description: e.payload.doc.data()['description'],
          status: e.payload.doc.data()['status']
        } as ISanllo;
      })
    })
  }

  onUpdate(id:string, task: ISanllo){
    this.sanlloService.update(id, task);
  }

}
