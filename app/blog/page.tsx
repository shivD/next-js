

import dynamic from "next/dynamic"
 const PostList = dynamic(()=>import('../../components/blogpost'))

export default function Blogs(){
    const blogsListing = [{
    title:'blog1',
    slug:'1'
    },
    {
        title:'blog2',
        slug:'2'
        }]
    return (
        <div>
        <h1>Blogs</h1>
     <PostList postList={blogsListing} />
        </div>
    )
}