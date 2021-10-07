export const getIdFromUrl = url => {
    const arr = url.split("/")
    const almostId = arr[arr.length - 1];
    const queryParameters = /\?(.*)/ 
    return almostId.replace(queryParameters, "")
}