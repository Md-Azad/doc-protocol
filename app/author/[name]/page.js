import ContentDisplay from "@/components/ContentDisplay";
import { getDirectory } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils/doc-utils";

const AuthorPage = ({ params: { name } }) => {
    const decodedName = decodeURIComponent(name);
  
  const docs = getDirectory();
  const matchedDocuments = getDocumentByAuthor(docs, decodedName);
  console.log("mat",matchedDocuments)


  return (
    <ContentDisplay id={matchedDocuments[0].id} />
    // <div>{name}</div>
  );
};

export default AuthorPage;
