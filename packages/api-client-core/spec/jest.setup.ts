// nock's fetch support is forthcoming and still broken, so we mock the global fetch to use cross-fetch, which nock supports mocking just fine
global.fetch = require("cross-fetch");
