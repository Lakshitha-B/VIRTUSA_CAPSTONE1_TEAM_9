async function fetchApiData(
    apiUrl: string,
    apiNumber: number
): Promise<void> {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status}: ${response.statusText}`
            );
        }

        const responseData: unknown = await response.json();

        console.log(`\nAPI ${apiNumber} Response:`);
        console.log(responseData);
    } catch (error) {
        console.error(
            `\nAPI ${apiNumber} failed:`,
            error instanceof Error ? error.message : error
        );
    }
}

async function executeApiCalls(apiUrls: string[]): Promise<void> {
    const startTime = Date.now();

    // Promise.all() executes the independent API requests concurrently.
    await Promise.all(
        apiUrls.map((apiUrl, index) =>
            fetchApiData(apiUrl, index + 1)
        )
    );

    const executionTime = Date.now() - startTime;

    console.log(`\nTotal execution time: ${executionTime} ms`);
}

function getApiUrls(): string[] {
    const commandLineArguments = process.argv.slice(2);

    if (commandLineArguments.length !== 3) {
        throw new Error(
            "Please provide exactly three API URLs."
        );
    }

    return commandLineArguments;
}

async function main(): Promise<void> {
    try {
        const apiUrls = getApiUrls();

        await executeApiCalls(apiUrls);
    } catch (error) {
        console.error(
            error instanceof Error ? error.message : error
        );
    }
}

main();