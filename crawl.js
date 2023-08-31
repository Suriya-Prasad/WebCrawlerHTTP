const { JSDOM } = require('jsdom')

async function crawlPage(currentURL){
    console.log(`Currently crawling : ${currentURL}`)
    const response = await fetch(currentURL, {
        method:'GET',
        mode:'cors'
    })

    if (Math.floor(response.status/400) === 1){
        console.log(`Webpage not found : ${currentURL}`)
        return
    }
    else if (Math.floor(response.status/500) === 1){
        console.log(`Internal server error on page ${currentURL}`)
        return
    }

    const contentType = response.headers.get('content-type')
    if (!contentType.includes('text/html')){
        console.log(`Non-html response received on page ${currentURL}`)
    }
    const htmlText = await response.text()
}

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
    getURLsFromHTML,
    crawlPage,
    isValidURL
}