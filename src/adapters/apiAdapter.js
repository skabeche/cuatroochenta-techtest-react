class ApiAdapter {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(url, headers = {}) {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "GET",
      headers: headers,
    });

    return await response.json();
  }

  async post(url, data) {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }

  async put(url, data) {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async delete(url) {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: "DELETE",
    });
    return await response.json();
  }
}

export default ApiAdapter;
