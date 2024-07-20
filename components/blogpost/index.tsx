
import Link from "next/link"
interface blogs{
    title:string,
    slug:string
}[]

export default function PostList({postList}:blogs){
    return(
        <div>
    {postList.map((blog:blogs)=>{
        return(
         <p><Link href={`blog/${blog.slug}`}>{blog.title}</Link></p>
        )
         })}
         </div>
    )
}