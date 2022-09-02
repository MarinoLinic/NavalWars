import http_fetch from "../../utils/http_fetch";
import { Avatar } from "../../utils/variables/Avatar";

export class Character {
  private name: string;
  private avatar: Avatar;
  private user: number;

  constructor(name: string, avatar: Avatar, user: number) {
    this.name = name;
    this.avatar = avatar;
    this.user = user;

    http_fetch.post("characters/create", {
      username: this.name,
      email: "testingemail@example.com",
      password: "testingpassword",
    });
  }
}
