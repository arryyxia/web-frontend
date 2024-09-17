// Server: local, jsonServer, and ngrok
const mode = 'main'

const config = {
    main: {
        baseURL: 'https://api.antekhub.com/api/',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'accept': 'application/json',
        },
    },
    local: {
        baseURL: 'http://localhost:8000/api/',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'accept': 'application/json',
        },
    },
}

export default config[mode]
