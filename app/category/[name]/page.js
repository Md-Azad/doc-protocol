import ContentDisplay from "@/components/ContentDisplay";
import { getDirectory } from "@/lib/doc";
import { getDocumentByCategory, getDocumentByTags } from "@/utils/doc-utils";



const  CategoryPage=({params: {name}})=> {

    const docs = getDirectory();
    const matchedDocuments = getDocumentByCategory(docs, name);
    console.log("response from categorypage",matchedDocuments[0].id)
 
    return (
        <ContentDisplay  id={matchedDocuments[0].id}/>
    );
  }

  export default CategoryPage;