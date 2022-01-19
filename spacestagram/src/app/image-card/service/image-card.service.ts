import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageCardService {

  private url: string = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=nYG7nYGq0G8pxxYhmil2nxSsmt1F71hE24M2ELMs";
  constructor(private http: HttpClient) { }

  getImages(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  
}
