const { JSDOM } = require('jsdom')

function getURLsFromHTML(htmlBody, baseURL){
    const links = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (let linkElement of linkElements){
        if (isValidURL(linkElement.href)) {
            links.push(linkElement.href) // absolute URL
        }
        else if (linkElement.href[0] === '/' && isValidURL(baseURL + linkElement.href)){
            const urlObj = new URL(baseURL + linkElement.href)
            links.push(urlObj.href)
        }
    }
    return links
}

function isValidURL(urlString){
    try{
        const url = new URL(urlString)
        return true
    }
    catch(err){
        return false
    }
}

function normalizeURL(urlString){
    if(isValidURL(urlString)){
        urlString = new URL(urlString)
        if (urlString.pathname.slice(-1) === '/'){
            return `${urlString.host}${urlString.pathname.slice(0,-1)}`
        }
        return `${urlString.host}${urlString.pathname}`
    }
    else{
        return 'Invalid URL'
    }
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}