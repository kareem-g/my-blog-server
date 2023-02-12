"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    'strapi::errors',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
        name: 'strapi::body',
        config: {
            jsonLimit: '10mb',
        },
    },
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'frame-src': ["'self'", process.env.FRONT_END_URL],
                    'frame-ancestors': null,
                    upgradeInsecureRequests: null,
                    'connect-src': ["'self'", 'https:'],
                    'script-src': [
                        "'self'",
                        "'unsafe-inline'",
                        'blob:',
                        'cdn.jsdelivr.net',
                    ],
                },
                frameguard: false,
                'img-src': ['*'],
                'media-src': [
                    "'self'",
                    'data:',
                    'blob:',
                    'https://aaemomjbgjkbqkbonibr.supabase.co',
                ],
                upgradeInsecureRequests: null,
            },
        },
    },
];
