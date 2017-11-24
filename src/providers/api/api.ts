import { User } from "../../model/user";
import { Observable } from "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiProvider {
  private API_URL: string = "https://api.github.com/search/users?q=";
  defaultUserSearch: string = "luisguilherme";

  constructor(public http: HttpClient) {}

  public getDefaultUsers(): Observable<User[]> {
    return this.http
      .get(this.API_URL + this.defaultUserSearch)
      .map(data => data['items'])
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }
}
