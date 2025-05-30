export function savedLikes() {
    const likes = localStorage.getItem("likes");
    return likes ? JSON.parse(likes) : [];
}

export function saveBlog(blog) {
    const blogs = savedBlogs();
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
}