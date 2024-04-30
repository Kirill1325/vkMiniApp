export const useFormattedTime = (newsTime: number) => {
    const date = new Date(newsTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    const formattedTime = hours + ':' + minutes + ':' + seconds
    return formattedTime
}