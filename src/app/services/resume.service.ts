import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CovidDataResume } from '../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(
    private http: HttpClient,
  ) { }


  getData() {
    // eslint-disable-next-line max-len
    return this.http.get<any>('http://vicentelopez.cloudapi.junar.com/api/v2/datastreams/INFOR-COVID-19-5TA-16229/data.json/?auth_key=KFdTk6sWTfyP7uW2ExEHhk0ckBbqls4UQNo95e5i&limit=2');
  }



}
