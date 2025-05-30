export function saveLikeCount(blogId, count) {
    localStorage.setItem(`blog_like_${blogId}`, count);
}
export function getLikeCount(blogId) {
    return parseInt(localStorage.getItem(`blog_like_${blogId}`), 10) || 0;
}

export function saveBlogSaved(blogId, isSaved) {
    localStorage.setItem(`blog_saved_${blogId}`, isSaved ? "1" : "0");
}

export function getBlogSaved(blogId) {
    return localStorage.getItem(`blog_saved_${blogId}`) === "1";
}