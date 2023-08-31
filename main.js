const { crawlPage, isValidURL } = require('./crawl.js')

function main(){
    if (process.argv.length < 3){
        console.log("No website provided")
        process.exit(1)
    }

    if (process.argv.length > 3){
        console.log('Too many arguments')
        process.exit(1)
    }

    const baseURL = process.argv[2]

    if (!isValidURL(baseURL)){
        console.log('Invalid URL entered')
        process.exit(1)
    }

    console.log(`Starting crawl on ${baseURL}`)

    crawlPage(baseURL)
}

main()