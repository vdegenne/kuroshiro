# @vdegenne/kuroshiro

Straightforward wrapper around [kuroshiro](https://github.com/hexenq/kuroshiro) including [kuroshiro-analyzer-kuromoji](https://github.com/hexenq/kuroshiro-analyzer-kuromoji).

It provides types.

## Installation

```bash
npm i -D @vdegenne/kuroshiro
```

## Usage

```ts
import {convert} from '@vdegenne/kuroshiro'

const result = await convert('こんにちは', {to: 'romaji'})
console.log(result) // konnichiwa
```
