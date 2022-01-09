export const zip = (...args) => args[0].map((_, i) => args.map(a => a[i]));

