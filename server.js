const liveServer = require("live-server");

const params = {
	open: true, // When false, it won't load your browser by default.
	ignore: 'node_modules', // comma-separated string for paths to ignore
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
	};
liveServer.start(params);