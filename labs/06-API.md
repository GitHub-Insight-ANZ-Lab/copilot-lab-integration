 
# Exercise 6

## Scenario

The goal is to create a WebAPI using .NET 8.0 with the help of GitHub Copilot. Follow the instructions below and try to use GitHub Copilot as much as possible. Try different things and see what GitHub Copilot can do for you.

## Goal

The `lab06\copilot-demo` folder contains the `MinimalAPI.sln` solution, with 2 projects:

- `MinimalAPI` is a minimal WebAPI project created using `dotnet new webapi -minimal`
- `MinimalAPI.Tests` is a minimal xUnit project created using `dotnet new xunit`
- `Dockerfile` will be used to create a docker image for the project.

To run the app open a terminal in the `lab06\copilot-demo` folder and run:

```sh
dotnet run --project ./MinimalAPI/MinimalAPI.csproj
```

To run the tests, open a terminal in the `copilot-demo` folder and run:

```sh
dotnet test
```

## Tasks

### Exercise 1: Run the API

For this exercise we will be adding a new endpoint to handle a simple GET request.

- Move to the `MinimalAPI/Program.cs` file
- Add a new Hello World endpoint at `/` that returns a `Hello World!` string.
- Start writing the code to handle `/` and wait a couple of seconds, Copilot will generate the code for you.
- Alternatively, you can test the Copilot inline feature by pressing `ctrl/⌘ + i`. Then write in the text box the desired behaviour.

You can now run the application and then test it with curl.

1. Run the spring app: `dotnet run --project ./MinimalAPI/MinimalAPI.csproj`
2. Test with curl: `curl -v "http://localhost:5163/"`
3. If you are using GitHub `Codespaces`, replace localhost:5163 with actual `Codespaces` url.

### Exercise 2: Write a Hello GET Request

For this exercise we will be adding a new endpoint to handle a simple GET request.

- Move to the `MinimalAPI/Program.cs` file
- Start writing the code to handle a simple GET request based on the following prompt:

```cs
/*
* Create a `/hello` GET endpoint to return the value of a query parameter called key.
* If the key is not passed, return "key not passed".
* If the key is passed, return "hello <key>".
*
*/
```

- Alternatively, you can test the Copilot inline feature by pressing `ctrl/⌘ + i`. Then write in the text box the desired behaviour.

You can now run the application and then test it with curl.

1. Run the spring app: `dotnet run --project ./MinimalAPI/MinimalAPI.csproj`
2. Test with curl: `curl -v "http://localhost:5163/hello?key=world"`
3. If you are using GitHub `Codespaces`, replace localhost:5163 with actual `Codespaces` url.

### Exercise 3: Write a Test Case

There is an existing unit test under `MinimalAPI.Tests/IntegrationTests.cs`, run the below command to test it.

- run `dotnet test`
- If the test passed you should see an output like this:

```sh
Starting test execution, please wait...
A total of 1 test files matched the specified pattern.

Passed!  - Failed:     0, Passed:     1, Skipped:     0, Total:     1, Duration: < 1 ms - MinimalAPI.Tests.dll (net8.0)
```

Let's now create a new unit test for the `/hello` endpoint. There should be a test for if a key is provided, and another test for if a key is not provided.

- Move to the `MinimalAPI.Tests/IntegrationTests.cs` file
- Create a comment with `//` and ask it to generate the test case for you. Wait a couple of seconds and it should autocomplete the test for you.
- You should then see the following output

```sh
Starting test execution, please wait...
A total of 1 test files matched the specified pattern.

Passed!  - Failed:     0, Passed:     3, Skipped:     0, Total:     3, Duration: 4 ms - MinimalAPI.Tests.dll (net8.0)
```

### Exercise 4: Generate a Swagger Definition file

In this exercise, you will generate a Swagger definition file for the `/hello` endpoint to document the API. Ask copilot for the steps to follow. It might include the following actions:

- Enable Swagger in the API Project: Open the MinimalAPI/Program.cs file, add the necessary code to enable Swagger using Swashbuckle.AspNetCore.

- Access the Swagger UI: Open a browser and navigate to http://localhost:5163/swagger (replace localhost:5163 with the actual URL if using Codespaces).
Verify the /hello Endpoint in the Swagger File:

- Open the swagger.json file and ensure the /hello endpoint is documented with its query parameter (key) and possible responses.
Optional: Customize the Swagger Documentation:

- Add metadata like title, description, and version to the Swagger configuration in Program.cs.

---------------
[Previous](./05-CICD.md) | [Next](./07-Documentation.md)