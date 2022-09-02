import http_fetch from "../../utils/http_fetch";

export class Character {
  public readonly id: number;
  public name: string;
  public avatar: string;
  public readonly user: string | null | undefined;

  constructor(id: number, name: string, avatar: string, user: string | null | undefined, send: boolean) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.user = user;

    if (send) 
      http_fetch.post("characters/create", {
        username: this.name,
        email: "testingemail@example.com",
        password: "testingpassword",
      });
  }
}
