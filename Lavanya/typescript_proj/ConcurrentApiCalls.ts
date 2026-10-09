async function main(): Promise<void> {
    const apiUrls = process.argv.slice(2);

    if (apiUrls.length !== 3) {
        console.log("Please enter exactly 3 API URLs.");
        return;
    }

    try {
        const responses = await Promise.all(
            apiUrls.map(url => fetch(url))
        );

        for (let i = 0; i < responses.length; i++) {
            const response = responses[i];

            if (!response) {
                continue;
            }

            if (!response.ok) {
                console.log(`API ${i + 1} failed: ${response.status}`);
                continue;
            }

            const data = await response.json();
            console.log(`API ${i + 1} Response:`, data);
        }
    } catch (error) {
        console.log("An error occurred:", error);
    }
}

main();