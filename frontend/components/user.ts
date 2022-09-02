import http_fetch from "../utils/http_fetch";
import { Avatar } from "../utils/variables/Avatar";
import { Character } from "./characters/character";

export class User {
  getId(): number {
    if (this.id == null) {
      this.FetchID();
      throw "ID is unidentified; fetching from database";
    } else return this.id;
  }

  constructor(username: string) {
    this.username = username;

    http_fetch.post("users/create", {
      username: this.username,
      email: "testingemail@example.com",
      password: "testingpassword",
    });

    this.FetchID();
  }

  private id: number | undefined | null;
  private username: string;

  private characters: Array<Character> = new Array<Character>();

  addCharacter(name: string, avatar: Avatar, id: number) {
    this.characters.push(new Character(name, avatar, id));
  }

  private async FetchID() {}
}
