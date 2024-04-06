import ContentDisplay from "@/components/ContentDisplay";
import { getDirectory } from "@/lib/doc";
import { getDocumentByTags } from "@/utils/doc-utils";



const  Page=({params: {name}})=> {

    const docs = getDirectory();
    const matchedDocuments = getDocumentByTags(docs, name);
    console.log("rep", matchedDocuments)
    return (
        <ContentDisplay  id={matchedDocuments[0].id}/>
    );
  }

  export default Page;