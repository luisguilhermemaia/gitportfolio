import { User } from "./../../model/user";
import { ApiProvider } from "./../../providers/api/api";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  users: User[];

  constructor(public navCtrl: NavController, public api: ApiProvider) {}

  ionViewDidLoad() {
    this.loadDefaltUserSearch();
  }

  loadDefaltUserSearch() {
    this.api.getDefaultUsers().subscribe(data => {
      this.users = data;
    });
  }
}
