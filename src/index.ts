import _kuroshiro from 'kuroshiro'
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji'
import {ConvertOptions} from './types.js'

let Kuroshiro = _kuroshiro.default

let kuro: InstanceType<typeof Kuroshiro> | undefined
async function getKuro() {
	if (!kuro) {
		kuro = new Kuroshiro()
		await kuro.init(new KuromojiAnalyzer())
	}
	return kuro
}

export async function convert(
	input: string,
	options?: Partial<ConvertOptions>,
): Promise<string> {
	const o: ConvertOptions = {
		to: 'hiragana',
		...options,
	}
	const kuro = await getKuro()
	return await kuro.convert(input, o)
}

export {KuromojiAnalyzer, Kuroshiro}
