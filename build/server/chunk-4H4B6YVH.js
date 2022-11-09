// .svelte-kit/adapter-node/chunks/index2.js
var HttpError = class {
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ValidationError = class {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function error(status, message) {
  return new HttpError(status, message);
}
function redirect(status, location) {
  if (isNaN(status) || status < 300 || status > 399) {
    throw new Error("Invalid status code");
  }
  return new Redirect(status, location);
}
function json(data, init) {
  const headers = new Headers(init == null ? void 0 : init.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init,
    headers
  });
}

export {
  HttpError,
  Redirect,
  ValidationError,
  error,
  redirect,
  json
};
//# sourceMappingURL=chunk-4H4B6YVH.js.map
