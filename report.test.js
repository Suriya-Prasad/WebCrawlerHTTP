const { sortPages } = require('./report.js')
const { expect, test } = require('@jest/globals')

test('sortPages with no pages', () => {
    const input = {}
    const actual = sortPages(input)
    const expected = []
    expect(actual).toEqual(expected)
})

test('sortPages with ascending page frequency', () => {
    const input = {"wagslane.dev/tags" : 62, "wagslane.dev" : 63}
    const actual = sortPages(input)
    const expected = [["wagslane.dev/tags",62], ["wagslane.dev", 63]]
    expect(actual).toEqual(expected)
})

test('sortPages with descending page frequency', () => {
    const input = { "wagslane.dev" : 63, "wagslane.dev/tags" : 62}
    const actual = sortPages(input)
    const expected = [["wagslane.dev/tags",62], ["wagslane.dev", 63]]
    expect(actual).toEqual(expected)
})