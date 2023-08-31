function printReport(pages){
    console.log("*********************")
    console.log("REPORT")
    console.log("*********************")

    const sortedPages = sortPages(pages)

    for(let i of sortedPages){
        console.log(`${i[0]} : ${i[1]}`)
    }
}


function sortPages(pages){
    let sortedPages = []

    for (let page in pages) {
        sortedPages.push([page, pages[page]]);
    }

    sortedPages.sort(function(a, b) {
        return a[1] - b[1];
    });

    return sortedPages
}

module.exports = {
    sortPages,
    printReport
}