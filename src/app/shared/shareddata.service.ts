import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
  allservices: any[] = [];
  allTeamMembers: any[] = [];
  allsubsribers: any[] = [];
  public allplan: any[] = [];
  private apiUrl = 'http://localhost:3000/planning';
  getPlanning(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addplanning(planing: any): Observable<any> {
    return this.http.post(this.apiUrl, planing);
  }
  updatePlanning(id: number, service: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, service);
  }
  
  deletePlanning(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
 
  private apiUrlServices = 'http://localhost:3000/services';
  private apiUrlTeamMembers = 'http://localhost:3000/teamMembers'; 
  private apiUrlallsubsribers = 'http://localhost:3000/subscribers'; 

  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get(this.apiUrlServices);
  }

  addService(service: any): Observable<any> {
    return this.http.post(this.apiUrlServices, service);
  }

  updateService(id: number, service: any): Observable<any> {
    return this.http.put(`${this.apiUrlServices}/${id}`, service);
  }

  deleteService(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlServices}/${id}`);
  }



  getTeamMembers(): Observable<any> {
    return this.http.get(this.apiUrlTeamMembers);
  }

  addTeamMember(teamMember: any): Observable<any> {
    return this.http.post(this.apiUrlTeamMembers, teamMember);
  }

  updateTeamMember(id: number, teamMember: any): Observable<any> {
    return this.http.put(`${this.apiUrlTeamMembers}/${id-1}`, teamMember);
  }

  deleteTeamMember(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlTeamMembers}/${id}`);
  }
  getSubscribers(): Observable<any> {
    return this.http.get(this.apiUrlallsubsribers);
  }

  addSubscriber(subscriber: any): Observable<any> {
    return this.http.post(this.apiUrlallsubsribers, subscriber);
  }

  updateSubscriber(id: number, subscriber: any): Observable<any> {
    return this.http.put(`${this.apiUrlallsubsribers}/${id}`, subscriber);
  }

  deleteSubscriber(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlallsubsribers}/${id}`);
  }
}