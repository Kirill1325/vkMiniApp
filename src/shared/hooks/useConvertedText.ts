export const useConvertedText = (htmlText: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const text = doc.body.textContent;

    return text;
}