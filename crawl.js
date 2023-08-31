function normalizeURL(urlString){
    try{
        urlString = new URL(urlString)
        if (urlString.pathname.slice(-1) === '/'){
            return `${urlString.host}${urlString.pathname.slice(0,-1)}`
        }
        return `${urlString.host}${urlString.pathname}`
    }
    catch(err){
        return 'Invalid URL'
    }
}

module.exports = {
    normalizeURL
}