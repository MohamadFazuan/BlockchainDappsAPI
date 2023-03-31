'use strict'

import pkg_winston from 'winston'
const { transports, format: _format } = pkg_winston;

export function setLogConfig(label) {
    const logConfig = {
        'transports': [
            new transports.Console(),
            new transports.File({
                filename: './logs/integration_hub.debug.log'
            })
        ],
        'format': _format.combine(
            _format.label({
                label: label
            }),
            _format.timestamp({
                format: 'DD-MM-YYYY HH:mm:ss'
            }),
            _format.simple(),
            _format.printf((info) => {
                return `${info.timestamp} - ${info.label}:[${info.level}]: ${info.message}`;
            })
        )
    }

    return logConfig;
}