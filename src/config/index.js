const environment = {
  test: {
    API_ENDPOINT: 'http://127.0.0.1:8000',
    USE_ALLY: true,
  },
  development: {
    API_ENDPOINT: 'https://carbondoomsday-test.herokuapp.com',
    USE_ALLY: true,
  },
  staging: {
    API_ENDPOINT: 'https://carbondoomsday-test.herokuapp.com',
    USE_ALLY: false,
  },
  production: {
    API_ENDPOINT: 'https://carbondoomsday.herokuapp.com',
    USE_ALLY: false,
  },
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(
  {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
  environment,
);
