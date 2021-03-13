import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'loren ipsum...', author: 'mario', id: 1 },
        { title: 'Welcomer party!', body: 'loren ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'loren ipsum...', author: 'luigi', id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Home;