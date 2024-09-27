const mode = 'ngrok';  // Use 'ngrok' or other modes you have like 'local' or 'main'

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
    ngrok: {
        baseURL: 'https://ladybird-diverse-pheasant.ngrok-free.app/api/public',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': 'true',
            'accept': 'application/json',
        },
    },
}

export default config[mode];
