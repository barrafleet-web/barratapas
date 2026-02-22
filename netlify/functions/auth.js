exports.handler = async () => {
  return {
    statusCode: 302,
    headers: {
      Location:
        "https://github.com/login/oauth/authorize?client_id=" +
        process.env.GITHUB_CLIENT_ID +
        "&scope=repo",
      "Cache-Control": "no-cache"
    }
  };
};
