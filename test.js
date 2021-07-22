var LoggerFactory = require("./index.js");

var loggerFactory1 = new LoggerFactory();
const logger11 = loggerFactory1.getLogger("Logger11");
logger11.debug("test");
logger11.info("test");
logger11.warn("test");
logger11.error("test");
const logger12 = loggerFactory1.getLogger("Logger12");
logger12.debug("test");
logger12.info("test");
logger12.warn("test");
logger12.error("test");

var loggerFactory2 = new LoggerFactory({
    default: {
        level: LoggerFactory.LEVEL.DEBUG
    },
    Logger22: {
        level: LoggerFactory.LEVEL.ERROR
    }
});
const logger21 = loggerFactory2.getLogger("Logger21");
logger21.debug("test");
logger21.info("test");
logger21.warn("test");
logger21.error("test");
const logger22 = loggerFactory2.getLogger("Logger22");
logger22.debug("test");
logger22.info("test");
logger22.warn("test");
logger22.error("test");