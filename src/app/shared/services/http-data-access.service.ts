/*
https://docs.nestjs.com/providers#services
*/

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { catchError } from "rxjs";
import { HttpResponseHandlerService } from "./http-response-handler.service";


@Injectable({providedIn:'root'})
export class HttpDataAccessService {
  headers!: HttpHeaders;
  constructor(protected httpClient: HttpClient, protected responseHandler: HttpResponseHandlerService){
    this.headers = this.getHeaders();
  }
  public genericServiceCaller(callType: string, controlerActionName: string, data: any) {
    let apiUrl = environment.apiUrl+ controlerActionName;
    if (callType == "post") {
      return this.httpClient
        .post(apiUrl, JSON.stringify(data)
          .replace(/"(-?\d+)n"/g, (_, a) => a), { headers: this.headers = this.getHeaders() })
        .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
    }
    else {
      return this.httpClient
        .get(apiUrl, { headers: this.headers = this.getHeaders(), params: {...data}})
        .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
    }
  }
  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append("Access-Control-Allow-Credentials", "true");
    headers = headers.append('Access-Control-Allow-Headers', '*');
    headers = headers.append('Content-Type', 'application/json; charset=UTF-8');
    headers = headers.append('Accept', 'application/json');
    return headers;
  }


}
