function fetchData(name: string, delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} data received`);
        }, delay);
    });
}

async function fetchSequentially(): Promise<void> {
    console.log("Starting API 1...");

    const userData: string = await fetchData("User", 2000);
    console.log(userData);

    console.log("Starting API 2...");

    const postData: string = await fetchData("Post", 1500);
    console.log(postData);

    console.log("Starting API 3...");

    const commentData: string = await fetchData("Comment", 1000);
    console.log(commentData);

    console.log("All API calls completed.");
}

fetchSequentially();