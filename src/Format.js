export function format(value, mode) {
    if (mode === 'CURRENCY') {
        return `$${value.toLocaleString()}`;
    }
    return value;
}
