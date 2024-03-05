type ClassValue =
	| string
	| number
	| undefined
	| null
	| false
	| Record<string, boolean | undefined | null>
	| ClassValue[];

export function classNames(...args: ClassValue[]): string {
	let classes: string[] = [];

	args.forEach((cls) => {
		if (typeof cls === 'string' || typeof cls === 'number') {
			classes.push(String(cls));
		} else if (Array.isArray(cls)) {
			classes = classes.concat(classNames(...cls));
		} else if (typeof cls === 'object') {
			const c = classNames(
				...Object.entries(cls)
					.filter(([className, value]) => Boolean(value))
					.map(([className, value]) => className)
			);
			if (c) classes = classes.concat(c);
		}
	});

	return classes.join(' ');
}
