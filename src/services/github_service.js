const BASE_URL = "https://api.github.com";
const { REACT_APP_TOKEN  } = process.env;

async function apiFetch(...args) {
  const response = await fetch(...args);
  const data = await response.json();
  return data;
}

function GithubService() {
  if (!GithubService.instance) {
    this.token = REACT_APP_TOKEN
    ;
    GithubService.instance = this;
  }
  return GithubService.instance;
}

GithubService.prototype.profile = function (username) {
  return apiFetch(`${BASE_URL}/users/${username}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  });
};

GithubService.prototype.followers = function (username) {
  return apiFetch(`${BASE_URL}/users/${username}/followers`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  });
};

GithubService.prototype.followings = function (username) {
  return apiFetch(`${BASE_URL}/users/${username}/following`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  });
};

GithubService.prototype.repos = function (username) {
  return apiFetch(`${BASE_URL}/users/${username}/repos?per_page=100`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  });
};
export default GithubService;
