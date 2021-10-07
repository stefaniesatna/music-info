export const getIdFromUrl = url => {
    const arr = url.split("/")
    const almostId = splitByForwardSlash[splitByForwardSlash.length - 1];
    const queryParameters = /\?(.*)/ 
    return almostId.replace(queryParameters, "")
}