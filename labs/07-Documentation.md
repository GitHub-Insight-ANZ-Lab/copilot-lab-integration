 
# Exercise 7 - Documentation

## Scenario

When new developers start working on an existing solution, one of the first tasks they face is cloning the solution, installing the required developer dependencies and running the solution locally. A well written README.md file is a great place to give an overview of a repository and how to get started.

## Goal

In this lab we will use Copilot to generate markdown documentation for our existing .NET API solution. 

- Using Copilot Chat, find out what's a good structure for a README.md file.
- Using the @workspace agent, ask Copilot to generate the high level structure for your README.md file.
- Use a combination of inline completions and inline chat to build out your README.md file. By the end this should have enough information for a new developer to get started with your solution.
 
## Tasks

## Exercise 1: Exploring an Existing Codebase

In this lab we will use Copilot to explore and familiarise ourselves with a new codebase.

You can try questions like `write a readme for lab07's solution`

## Exercise 2: Improvements and Secure Coding Practices

In this lab we will use Copilot to identify potential issues with the codebase and suggest improvements.

You can try questions like `any suggestion to improve secure coding in lab07's solution`

## Exercise 3: Documenting an Existing Solution

In this lab we will use Copilot to generate documentation for existing code which lacks comments or documentation.

1. Navigate to the `TodoItemsController.cs` file located within the `src/TodoApi/Controllers` folder.
2. Highlight the `GetTodoItems()` method, bring up the inline chat popup and use the `/docs` command to generate documentation for the method.
3. Open the Copilot Chat tab and use the `/docs` command to generate documentation for the remainder of the methods.
4. Navigate to the `DbContextExtensions.cs` file located in the `src/TodoItems/Extensions` folder.
5. Use Copilot to update the incorrect documentation to match the extension method logic.
 
## Exercise 4: Generating Markdown Documentation

In this lab we will use Copilot to generate markdown documentation for our existing .NET API solution. 

When new developers start working on an existing solution, one of the first tasks they face is cloning the solution, installing the required developer dependencies and running the solution locally. A well written README.md file is a great place to give an overview of a repository and how to get started.

1. Create a new folder in the `labs\lab07` of the repository named `docs`, within this folder create a file names `README.md`.
2. Using Copilot Chat, find out what's a good structure for a `README.md` file.
3. Using the `@workspace` agent, ask Copilot to generate the high level structure for your `README.md` file.
4. Use a combination of inline completions and inline chat to build out your `README.md` file. By the end this should have enough information for a new developer to get started with your solution.

---------------
[Previous](./07-API.md)