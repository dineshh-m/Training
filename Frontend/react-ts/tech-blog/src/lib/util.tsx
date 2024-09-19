export function getReadableDate(dateNum: number) {
    const date = new Date(dateNum).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    
    return date;
}