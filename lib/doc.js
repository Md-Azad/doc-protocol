import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "gray-matter";

const postsDirectory = path.join(process.cwd(),"docs");

export function getDirectory (){

    const fileNames = fs.readdirSync(postsDirectory)
    
    const allDocuments = fileNames.map(fileName=>{
        const id = fileName.replace(".md", "")
        const fullPath = path.join(postsDirectory, fileName)

        const fileContents = fs.readFileSync(fullPath, "utf8")
        
        const matterResult = matter(fileContents);
        return {
           id,
            ...matterResult.data,
        }
    })

    return allDocuments.sort((a,b)=>{
        if(a.order<b.order){
            return -1;
        
        }
        if(a.order>b.order){
            return 1;
        
        }

        return 0;
    });
}