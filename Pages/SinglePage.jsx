import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../src/Component/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

function SinglePage(){
  let navigate = useNavigate()
  const  [Blogs, setBlogs] = useState([])
  const data = useParams()
  const id = data.id
  async function fetchBlogs(){
    let response = await axios.get("https://67dba9511fd9e43fe475534e.mockapi.io/Blogs/" + id)

if(response.status==200){
    setBlogs(response.data)
  } else{
    console.log("Something went wrong")
  }
}
useEffect(()=>{
  fetchBlogs()
},[])

async function deleteBlogs(){
  let response = await axios.delete("https://67dba9511fd9e43fe475534e.mockapi.io/Blogs/" + id)
  if(response.status ==200){
    navigate("/")
}else{
  console.log("Something went wrong")
}
}

    return(
       <>
        <Navbar />
       <div className="bg-gray-100 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-full h-full object-cover" src={Blogs.thumbil} alt="Product Image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button onClick={deleteBlogs} className="w-full bg-gray-900 dark:bg-gray-600 text-white 
            py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Delete</button>
          </div>
          <div className="w-1/2 px-2">
          <Link to="/editpage">
            <button className="w-full bg-gray-200 dark:bg-gray-700
             text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold
              hover:bg-gray-300 dark:hover:bg-gray-600">Edit</button>
            </Link>
            </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{Blogs.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {Blogs.subtitle}
        </p>
        
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            {Blogs.discription}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
       </>
    )
}
export default SinglePage