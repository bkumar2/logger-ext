const moment = require('moment');

const LEVEL = {
    DEBUG: {
        order: 10,
        name: "DEBUG"
    },
    INFO: {
        order: 20,
        name: "INFO"
    },
    WARN: {
        order: 30,
        name: "WARN"
    },
    ERROR: {
        order: 40,
        name: "ERROR"
    },
};

class LoggerFactory {
    constructor(config) {
        this.config = (config == null ? {
            default: {
                level: LEVEL.INFO,
            }
        } : config);
    }

    getLogger(name) {
        return new Logger(name, this);
    }

    shouldLog(name, level) {
        var loggerConfig = this.config[name];
        if (loggerConfig != null) {
            return loggerConfig.level.order <= level.order;
        } else if (this.config.default != null) {
            return this.config.default.level.order <= level.order;
        }
        return false;
    }

    log(name, level, ...params) {
        const NAME_LENGTH = 20;
        const NAME_EXTRA_LENGTH_REPLACE_STRING = "..";
        const DATE_FORMAT = 'YYYY-MM-DD,HH:mm:ss';
        if (this.shouldLog(name, level)) {
            let formattedName = name.length > NAME_LENGTH ?
                name.substring(0, NAME_LENGTH / 2) + NAME_EXTRA_LENGTH_REPLACE_STRING +
                name.substring(name.length - (NAME_LENGTH / 2 - NAME_EXTRA_LENGTH_REPLACE_STRING.length), name.length) :
                name.padStart(NAME_LENGTH);
            console.log(moment().format(DATE_FORMAT), formattedName,
                level.name.padStart(5), ...params);
        }
    }
}

LoggerFactory.LEVEL = LEVEL;

class Logger {
    constructor(name, loggerFactory) {
        this.name = name;
        this.factory = loggerFactory;
    }

    debug(...params) {
        this.factory.log(this.name, LEVEL.DEBUG, ...params);
    }

    info(...params) {
        this.factory.log(this.name, LEVEL.INFO, ...params);
    }

    warn(...params) {
        this.factory.log(this.name, LEVEL.WARN, ...params);
    }

    error(...params) {
        this.factory.log(this.name, LEVEL.ERROR, ...params);
    }
}

module.exports = LoggerFactory;
