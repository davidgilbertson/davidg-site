import chalk from 'chalk';
const logLevelName = process.env.LOG_LEVEL;
const isProd = process.env.NODE_ENV === 'production';
const isServer = typeof window === 'undefined';

const INFO = 20;
const WARN = 30;
const ERROR = 40;

const logLevels = {
    info: INFO,
    warn: WARN,
    error: ERROR
};

const logLevel = logLevels[logLevelName];

if (!isServer) window.MAH_LOGS = [];

class Logger {
    constructor(namespace = '') {
        this.namespace = namespace;
    }

    getPrefix(level, withDate) {
        let result = '';
        if (withDate) result += new Date().toISOString();
        if (level) result += ` ${level.toUpperCase()} `;
        result += this.namespace;
        result += ' >';

        return result;
    }

    logOnClient(method = 'log', ...args) {
        // In production, put logs in a variable rather than muss up the console
        if (isProd) {
            window.MAH_LOGS.push({
                level: method,
                namespace: this.namespace,
                args
            });
        } else {
            console[method](this.getPrefix(null, false), ...args); // eslint-disable-line no-console
        }
    }

    logOnServer(method, ...args) {
        // Color code and log to console
        const colors = {
            info: 'gray',
            warn: 'yellow',
            error: 'red'
        };

        const color = colors[method] || 'gray';
        const prefix = this.getPrefix(method, true);

        console[method](chalk[color](prefix), ...args); // eslint-disable-line no-console

        // Log to file
        const fs = require('fs');
        const path = require('path');
        const logFilePath = path.resolve(__dirname, '../../logs/log.log');

        fs.appendFile(logFilePath, `${prefix} ${args} \n`);
    }

    info(...args) {
        if (logLevel <= INFO) {
            if (isServer) {
                this.logOnServer('info', ...args);
            } else {
                this.logOnClient('info', ...args);
            }
        }
    }

    warn(...args) {
        if (logLevel <= WARN) {
            if (isServer) {
                this.logOnServer('warn', ...args);
            } else {
                this.logOnClient('warn', ...args);
            }
        }
    }

    error(...args) {
        if (logLevel <= ERROR) {
            if (isServer) {
                this.logOnServer('error', ...args);
            } else {
                this.logOnClient('error', ...args);
            }
        }
    }
}

export function init(namespace) {
    return new Logger(namespace);
}
