module.exports = {
  urlInvalid: ({ code, response, request }) => {
    const { statusMessage, data } = response;
    const { documentation_url, message } = data;
    return {
      errorMessage: {
        documentation_url,
        message,
        code,
        statusCode: response.status,
        statusMessage,
      },
    };
  },
};
