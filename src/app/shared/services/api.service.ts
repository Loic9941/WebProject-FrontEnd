import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.API_ENDPOINT;
  
  constructor(private http:HttpClient) {
  }

  getToken(){
    const token= sessionStorage.getItem("jwt");
    return token;
  }
  getHeaders(){
    const token = this.getToken();
    return {headers: {'Authorization':'Bearer '+token, 'Content-Type': 'application/json'} };
  }

  getHeadersMedia(){
    const token = this.getToken();
    return {headers: {'Authorization':'Bearer '+token} };
  }

  post(endpoint: string, data: any){
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, this.getHeaders());
  }

  postMedia(endpoint: string, data: any){
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, this.getHeadersMedia());
  }

  get(endpoint: string){
    return this.http.get(`${this.baseUrl}/${endpoint}`, this.getHeaders());
  }

  put(endpoint: string, data: any){
    return this.http.put(`${this.baseUrl}/${endpoint}`, data,this.getHeaders());
  }

  putMedia(endpoint: string, data: any){
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, this.getHeadersMedia());
  }

  delete(endpoint: string, id: number){
    return this.http.delete(`${this.baseUrl}/${endpoint}/${id}`, this.getHeaders());
  }
}
