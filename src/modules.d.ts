declare module 'kuroshiro' {
	class Kuroshiro {
		init(analyzer: any): Promise<void>
		convert(
			text: string,
			options?: {to?: 'hiragana' | 'katakana' | 'romaji'},
		): Promise<string>
	}

	const _default: {
		default: typeof Kuroshiro
	}

	export default _default
}

declare module 'kuroshiro-analyzer-kuromoji' {
	export default class {}
}
