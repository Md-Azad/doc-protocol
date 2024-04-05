import ContentDisplay from "@/components/ContentDisplay";

const subContentPage = ({params:{subContentId}})=>{
    return (
        <div>
        <ContentDisplay id={subContentId}/>
    </div>
    )
}

export default subContentPage;