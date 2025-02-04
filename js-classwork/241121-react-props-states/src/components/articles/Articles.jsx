import { useState } from "react"
import AddArticle from "../addArticle/AddArticle"
import Article from "../article/Article"

const Articles = ()=>{
    const [form, setForm] = useState(false)
    const [articles, setArticles] = useState([])

    const addArticle = (data) =>{   
        setArticles((prevData)=>{
            return [...prevData, data]
        })
    }

    return (
        <main className="container">
            <button onClick={()=>{setForm(true)}} className="btn btn-primary mb-3">Pridėti naujiena</button>
            {(form) && <AddArticle onSave={addArticle}/>}
            <h1>Naujienos</h1>
            {articles?.map(article=>
                <Article
                    title={article.title}
                    content={article.content}
                />
            )}
        </main>
    )
}

export default Articles