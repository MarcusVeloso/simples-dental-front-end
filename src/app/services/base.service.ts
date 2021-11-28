import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseService {

  protected UrlAPIV1: string = environment.urlAPIv1;

  protected extrairData(response: any){
    return response;
  }
}