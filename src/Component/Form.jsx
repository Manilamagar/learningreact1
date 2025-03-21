
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Form({text}){
  let navigate = useNavigate()
  const [title,setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [thumbil, setThumbil] = useState("")
  const [description, setDescription] = useState("")

    // console.log(text,"Yo chai")
async function createBlog(e){
e.preventDefault()
let response = await axios.post("https://67dba9511fd9e43fe475534e.mockapi.io/Blogs",{
  title,
  subtitle,
  thumbil,
  description
})
if (response.status ==201){
  navigate("/")
}else{
  console.log("Something went wrong")
}
} 

    return(
        <div className="flex items-center justify-center h-screen">
  <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
    {/* Logo and Heading */}
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-blue-600 flex items-center justify-center">
        <span className="mr-1 text-3xl font-bold">ES</span>
        BLOG
      </h1>
      <p className="text-gray-500 text-sm mt-1">
        Blog Management website
      </p>
    </div>
    {/* Divider */}
    <div className="my-6 border-t border-gray-300 relative">
      <span className="absolute top-[-10px] bg-white left-1/2 transform -translate-x-1/2 px-3 text-gray-500">
        {text=="editPage" ? "Edit Page" : "Create Page" }
      </span>
    </div>
    
    <form onSubmit={createBlog} className="space-y-4">
     
      <div>
        {
            text == "createPage" && (
<input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
            )
        } 
      </div>
     
      <div>
        <input type="Title" onChange={(e)=>setTitle(e.target.value)} placeholder="Title" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
     
      <div>
        <input type="Sub-Title" onChange={(e)=>setSubtitle(e.target.value)}  placeholder="Sub-Title" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
      </div>
     
      <div className="relative">
        <input type="Thumbail" onChange={(e)=>setThumbil(e.target.value)} placeholder="Thumbail URL" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
        </span>
      </div>
    
      <div className="relative">
        <input type="Description" onChange={(e)=>setDescription(e.target.value)} placeholder="Description" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-100" />
        <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
          👁️
        </span>
      </div>
      
      <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition">
        {text=="editPage" ? "Edit" : "Create"} 
      </button>
    </form>
    
  </div>
</div>
    )
}

export default Form