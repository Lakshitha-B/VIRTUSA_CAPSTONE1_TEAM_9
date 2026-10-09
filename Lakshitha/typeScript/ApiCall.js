"use strict";
function fetchData(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} data received`);
        }, delay);
    });
}
async function fetchSequentially() {
    console.log("Starting API 1...");
    const userData = await fetchData("User", 2000);
    console.log(userData);
    console.log("Starting API 2...");
    const postData = await fetchData("Post", 1500);
    console.log(postData);
    console.log("Starting API 3...");
    const commentData = await fetchData("Comment", 1000);
    console.log(commentData);
    console.log("All API calls completed.");
}
fetchSequentially();
