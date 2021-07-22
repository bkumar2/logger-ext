var LoggerFactory = require("./index.js");

var loggerFactory1 = new LoggerFactory();
const logger1 = loggerFactory1.getLogger("Logger1");
logger1.debug("test");
logger1.info("test");
logger1.warn("test");
logger1.error("test");

var loggerFactory2 = new LoggerFactory({
    default: {
        level: LoggerFactory.LEVEL.DEBUG
    }
});
const logger2 = loggerFactory2.getLogger("Logger2");
logger2.debug("test");
logger2.info("test");
logger2.warn("test");
logger2.error("test");