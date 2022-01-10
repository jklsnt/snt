import { zip } from './util.js'

export const completion = (countd, maxima) => zip(countd, maxima)
    .reduce((a, [c, m]) => a + Math.min(1, c/m), 0) / countd.length
