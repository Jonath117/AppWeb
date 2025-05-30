export function savedLikes() {
    const likes = localStorage.getItem("likes");
    return likes ? JSON.parse(likes) : [];
}

export function saveBlog(blog) {
    const blogs = savedBlogs();
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
}
document.querySelectorAll(".like-button").forEach(button => {
        button.addEventListener("click", () => {
            const blogId = button.dataset.blogId;
            const likes = JSON.parse(localStorage.getItem("likes")) || [];
            if (!likes.includes(blogId)) {
                likes.push(blogId);
                localStorage.setItem("likes", JSON.stringify(likes));
            }
        });
});

document.querySelectorAll(".save-button").forEach(button => {
        button.addEventListener("click", () => {
            const blogId = button.dataset.blogId;
            const savedBlogs = JSON.parse(localStorage.getItem("savedBlogs")) || [];
            if (!savedBlogs.includes(blogId)) {
                savedBlogs.push(blogId);
                localStorage.setItem("savedBlogs", JSON.stringify(savedBlogs));
            }
        });
});

