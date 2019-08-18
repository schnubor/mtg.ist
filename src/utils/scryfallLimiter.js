import Bottleneck from 'bottleneck'

// Consider Scryfalls` API rate limits (https://scryfall.com/docs/api)
export const limiter = new Bottleneck({
    minTime: 75,
    maxConcurrent: 1,
})
