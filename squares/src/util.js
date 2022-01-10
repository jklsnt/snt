export const zip = (...args) => args[0].map((_, i) => args.map(a => a[i]));
export const mapUntil = (iterable, predicate, mapfn=x => x) => {
    const ret = [];
    for (let k of iterable)
        if (!predicate(k)) break;
        else ret.push(mapfn(k));
    return ret;
}

