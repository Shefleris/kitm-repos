import { useState } from "react"

const Article = (props)=>{
    const [likes,setLikes] = useState(0);
    const handleClicks = ()=>{
        setLikes(likes + 1);
    }
    console.log("Component rendered");
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={handleClicks}>Like</button>
            <p>Like: {likes}</p>
        </article>
    )
}

export default Article