const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

async function main(){
    if (process.argv.length < 3){
        console.log("No website provided")
        process.exit(1)
    }

    if (process.argv.length > 3){
        console.log('Too many arguments')
        process.exit(1)
    }

    const baseURL = process.argv[2]

    console.log(`Starting crawl on ${baseURL}`)

    const pagesMap = await crawlPage(baseURL, baseURL, {})

    console.log('Crawling completed successfully')

    printReport(pagesMap)
    
    process.exit(0)
}

main()