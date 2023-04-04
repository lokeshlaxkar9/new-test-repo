function triple(value) {
    return typeof value === 'string' ? value.repeat(3) : value * 3;
}
;
console.log(triple('abc'));
