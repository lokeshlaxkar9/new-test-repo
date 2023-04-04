function triple(value:string|number) {
    return typeof value === 'string' ? value.repeat(3) : value * 3;
};

console.log(triple('abc'));