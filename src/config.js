// Server: local, jsonServer, and ngrok
const mode = 'local'

const config = {
    main: {
        baseURL: 'https://api.antekhub.com/api/public',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'accept': 'application/json',
        },
    },
    local: {
        baseURL: 'http://127.0.0.1:8000/api/public',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'accept': 'application/json',
        },
    },
}

export default config[mode]
