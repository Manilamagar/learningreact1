import axios from "axios"
import Card from "../src/Component/card"
import Navbar from "../src/Component/Navbar"
import { useEffect, useState } from "react"



function Home(){
// let name= "Manila"
//     const [name, setName] =useState("Manila")
//     const [age, setAge] =useState(25)
//     const [data, setData] =useState(["Manila", "Asmita", "Barsha"])
//     const [datas, setDatas] =useState({
//         name: "Manila",
//         age: 25
//     })


const [Blogs, setBlogs] = useState([])



   async function fetchBlogs(){
      let response = await axios.get("https://67dba9511fd9e43fe475534e.mockapi.io/Blogs")
if(response.status==200){
    setBlogs(response.data)
    // console.log(response.data)
}else{
    console.log("Something went wrong, error happened")
}
    }

    //hook
    useEffect(()=>{
        fetchBlogs()
        //  console.log("this is blog created using useState")
    },[])


    return(
    <>
    <Navbar />
<div className="flex flex-wrap pl-20">

    {
        Blogs.map(function(blog){
            return(
<Card key={blog.id} blog={blog}/>
            )
        }
    )
    }

</div>



    </>


    )
}

export default Home