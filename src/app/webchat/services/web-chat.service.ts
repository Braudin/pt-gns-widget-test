import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { EMPOINTS } from 'src/app/config/global'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class WebChatService {
  constructor(private http: HttpClient) {}

  getHealth(): Observable<Response> {
    const url = `${environment.apiUrl}${EMPOINTS.health}`
    return this.http.get<Response>(url).pipe(map(data => data))
  }
}
