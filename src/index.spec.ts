import { test, expect } from 'vitest'
import { parseArgs } from './index'
// -l -p 8080 -d '/usr/logs'
test('当给定一个 l 时，应该返回 true', () => {
  const options = {
    l: Boolean,
  }
  const args = parseArgs(options, ['-l'])
  expect(args).toEqual({
    l: true,
  })
})

// -p 8080
test('当给定一个 p 时，应该返回 8080', () => {
  const options = {
    p: Number,
  }
  const args = parseArgs(options, ['-p', '8080'])
  expect(args).toEqual({
    p: 8080,
  })
})

// -d '/usr/logs'
test('当给定一个 d 时，应该返回 /usr/logs', () => {
  const options = {
    d: String,
  }
  const args = parseArgs(options, ['-d', '/usr/logs'])
  expect(args).toEqual({
    d: '/usr/logs',
  })
})
// 完整
test('happy path', () => {
  const options = {
    l: Boolean,
    p: Number,
    d: String,
  }
  const args = parseArgs(options, ['-l', '-p', '8080', '-d', '/usr/logs'])
  expect(args).toEqual({
    l: true,
    p: 8080,
    d: '/usr/logs',
  })
})
