import { classNames } from './classNames';

describe('classNames', () => {
	it('with 1 string', () => {
		expect(classNames('className')).toBe('className');
	});
	it('with a few strings', () => {
		expect(classNames('className1', 'className2', 'className3')).toBe(
			'className1 className2 className3',
		);
	});
	it('with objects', () => {
		expect(
			classNames(
				{ className1: false },
				{ className2: true },
				{ className3: undefined },
				{ className4: null },
				{ className5: true },
			),
		).toBe('className2 className5');
	});
	it('with arrays', () => {
		expect(classNames(['className1', 'className2', 'className3'])).toBe(
			'className1 className2 className3',
		);
	});
	it('with nested arrays and objects', () => {
		expect(classNames('className1', ['className2', { className3: true }])).toBe(
			'className1 className2 className3',
		);
	});
	it('with mixed', () => {
		expect(
			classNames(
				['className1'],
				'className2',
				{ className3: true },
				{ className4: false },
				['className5', 'className6'],
			),
		).toBe('className1 className2 className3 className5 className6');
	});
});
