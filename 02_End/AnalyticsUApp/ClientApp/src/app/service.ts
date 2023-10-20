import {Component, Inject, Injectable} from '@angular/core'
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {MonthlyAnalytics} from './models/TransferDTO'
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
    providedIn: 'root'
})


export class AnalyticsServices{

    private baseUrl: string = "";
    private readonly controller: string = "analyticsu/";
    private readonly getDataUrl: string = "GetData";

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string)
    {
        this.baseUrl = baseUrl;
    }

    public getData(): Observable<MonthlyAnalytics[]>{
        return this.http.get<MonthlyAnalytics[]>(this.baseUrl + this.controller + this.getDataUrl);
    }
}