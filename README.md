# logger-ext (Logger Extension)

logger-ext provides configurable and formatted console logging methods.

## Installation

```
npm install logger-ext --save
```

## Usage

```javascript
// Import Logger Factory class
var LoggerFactory = require('logger-ext');
// Create logger factory instance once for the entire application
var loggerFactory = new LoggerFactory();
// Create a named logger for any module or any file as needed
const testLogger = loggerFactory.getLogger("TestLogger");
// Log debug message
testLogger.debug("debugging");
// Log info message
testLogger.info("message to inform");
// Log warning message
testLogger.warn("issuing a warning");
// Log error message
testLogger.error("got an error");
```

## API Documentation
