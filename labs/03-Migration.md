# Exercise 3 - Migration

## Scenario

You have an application currently uses JavaScript for its business logic and processes data from a XML file. Your goal is to migrate the JavaScript logic into C# using GitHub Copilot to assist with the conversion.

## Goal

By the end of this exercise, you will:

1. Understand how to use GitHub Copilot to assist with code migration.
2. Successfully convert JavaScript logic into C#.
3. Validate the migrated C# code using the provided XML data.

## Tasks

The JavaScript logic is located in `lab03\node\convert.js`, and the sample data is provided in `data.xml`. The final C# implementation should replicate the functionality of the JavaScript code while adhering to C# best practices.

### Step 1: Review the JavaScript program  

Open the `node\convert.js` file and review the logic implemented in JavaScript in `lab03\node` folder. 

Understand how it processes the `data.xml` file and try to run the program.

### Step 2: Set Up a C# Project

Create a new C# console application using the .NET CLI in side `lab03\csharp\`

Ask copilot how to use `dotnet` command to create a blank c# console application.

### Step 3: Migrate the Logic

Use GitHub Copilot to assist in converting the JavaScript logic from `convert.js` into a C# equivalent.  

Ensure the migrated code reads and processes the `data.xml` file correctly.

### Step 4: Execute the C# program

Build and compile the new c# application, then test out the the `data.xml` file.

Ask copilot how to run `.net` program and follow the suggestions.

### Step 5: Document the Migration

Write a short summary of the migration process using GitHub Copilot.

---------------
[Previous](./02-Transformation.md) | [Next](./04-Bicep.md)