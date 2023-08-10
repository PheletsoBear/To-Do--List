import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCounter: number = 0;
  projecttext: string = "Code";
  projects : string [] = [""] ;

  constructor(){}

  ngOnInit(): void {
    
    this.itemCounter = this.projects.length;
  }

  additem(){
     this.projects.push(this.projecttext);
     this.projecttext = "";  
     this.itemCounter = this.projects.length; 
  
  }
  removeitem(i:number){
      this.projects.splice(i,1);
      this.itemCounter = this.projects.length
  }

}
