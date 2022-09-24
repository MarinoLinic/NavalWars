import { CharacterData } from "./http_data";

export const http_fetch: any = {
  get: async function (sessionId: string, address: string) {
    let data = fetch("http://localhost:3000/api/" + address, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  post: async function (sessionId: string, address: string, data: any) {
    fetch("http://localhost:3000/api/" + address, {
      body: JSON.stringify({sessionId, ...data}),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  put: async function (sessionId: string, address: string, data: any) {
    fetch("http://localhost:3000/api/" + address, {
      body: JSON.stringify({sessionId, ...data}),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  delete: async function (sessionId: string, address: string, data: any) {
    fetch("http://localhost:3000/api/" + address, {
      body: JSON.stringify({sessionId, ...data}),
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export const characterAdd = async (sessionId: string, userEmail: string, data: CharacterData) => http_fetch.post(sessionId, "characters/create", {userEmail, ...data});
export const characterChange = async (sessionId: string, data: CharacterData) => http_fetch.put(sessionId, "characters/change", data);
export const characterDelete = async (id: number) => http_fetch.delete("characters/delete", { id : id });