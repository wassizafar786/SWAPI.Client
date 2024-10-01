import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpDataAccessService } from '../../shared/services/http-data-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baseUrl!:string;
  action!:string;
  actionList!:string[];
  result:any;
  message!:string;
  constructor(private readonly _clientHttpRequest:HttpDataAccessService) {
    this.baseUrl = environment.apiUrl;
    this.actionList = ['people/1','planets/1','films/1'];
   }

  ngOnInit() {
  }
  changeTo=(item:string)=>this.action = item;
  onGet(){
    this.result = '';
    if(!this.action){
      this.message = 'Please select api name first.';
      return ;
    }
    this._clientHttpRequest.genericServiceCaller('get',this.action,{})
    .subscribe(result=>{
      this.message = '';
      if(result){
        this.result = JSON.stringify(result, null, 2);;
      }else {
        this.result='No Record found';
      }
    })
  }
}
