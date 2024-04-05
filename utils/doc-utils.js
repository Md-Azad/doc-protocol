export function getDocumentByCategory(docs, category){
    return docs.filter((doc)=> doc.category ===category)
}
export function getDocumentByAuthor(docs, author){
    return docs.filter((doc)=> doc.author ===author)
}
export function getDocumentByTags(docs, tag){
    return docs.filter((doc)=> doc.tag.some(inputTag=>inputTag===author))
}