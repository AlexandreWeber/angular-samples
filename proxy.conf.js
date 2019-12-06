const PROXY_CONFIG = [
    {
        context: [
            "/totvs-rest",
            "/totvs-login"
        ],
        target: "http://servidorjboss:8280",
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
        autoRewrite: true
    }, {
        context: [
            "/totvs-rest",
            "/totvs-login",
            "/dts/datasul-rest"
        ],
        target: "http://gales:8180",
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
        autoRewrite: true,
        // headers: {
        //     Cookie: "JOSSO_SESSIONID=87B5BA6E50A03AE4F1B6E5F827524A40; JSESSIONID=D59F8EC5AFED4732A3DCC85047A2F857"
        // }
        headers: {
            Authorization: "Basic c3VwZXJncDpzdXBlckAxMjM="
        }
    }
]

module.exports = PROXY_CONFIG;

