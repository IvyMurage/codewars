export function alphanumeric(string: string): boolean {
    return string.length === 0 ? false : string.match(/[&()!""_^\s+$]/gi) ? false : true
}