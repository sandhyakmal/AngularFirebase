import { Component, OnInit } from '@angular/core';
import { SanlloService } from 'src/app/services/sanllo.service';

@Component({
  selector: 'app-sanllo-navbar',
  templateUrl: './sanllo-navbar.component.html',
  styleUrls: ['./sanllo-navbar.component.css']
})
export class SanlloNavbarComponent implements OnInit {

  constructor(public sanlloService: SanlloService) { }

  ngOnInit(): void {
  }

  onInit(): void{
    this.sanlloService.init();
  }
}
