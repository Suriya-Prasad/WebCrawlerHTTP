const { default: expect } = require('expect')
const { normalizeURL } = require('./crawl.js')
const { test, except } = require('@jest/globals')

test('normalizeURL with specified path and a trailing forward slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL with specified path and no trailing forward slash', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL without path but has trailing forward slash', () => {
    const input = 'https://blog.boot.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected)
})

test('normalizeURL without path and no trailing forward slash', () => {
    const input = 'https://blog.boot.dev'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev'
    expect(actual).toEqual(expected)
})

test('normalizeURL with no protocol', () => {
    const input = 'blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'Invalid URL'
    expect(actual).toEqual(expected)
})

test('normalizeURL with no hostname and no path', () => {
    const input = 'https://'
    const actual = normalizeURL(input)
    const expected = 'Invalid URL'
    expect(actual).toEqual(expected)
})

test('normalizeURL with no protocol and no hostname', () => {
    const input = '/path/'
    const actual = normalizeURL(input)
    const expected = 'Invalid URL'
    expect(actual).toEqual(expected)
})