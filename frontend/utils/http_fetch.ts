const http_fetch: any = {
  post: async function (address: string, data: any) {
    fetch("http://localhost:3000/api/" + address, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  get: async function (address: string) {
    let data = fetch("http://localhost:3000/api/" + address, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default http_fetch;
