import { CovidDataResume } from './../models/home.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(
    private http: HttpClient,
  ) { }



  getData() {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json',
          'rejectUnauthorized': 'false'
        }
      )
    };
    return this.http.get<CovidDataResume>('http://vicentelopez.cloudapi.junar.com/api/v2/datastreams/INFOR-COVID-19-5TA-16229/data.json/?auth_key=KFdTk6sWTfyP7uW2ExEHhk0ckBbqls4UQNo95e5i&limit=2/', httpOptions);
  }



}
