export const getTypeFromUrl = url => {
    const arr = url.split("/")
    return arr[3]
}