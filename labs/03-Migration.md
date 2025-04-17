# Exercise 3: Migrating JavaScript to C# with GitHub Copilot

## Scenario

You are participating in a hackathon where your team is tasked with modernizing an application. The application currently uses JavaScript for its business logic and processes data from an XML file. Your goal is to migrate the JavaScript logic into C# using GitHub Copilot to assist with the conversion.

The JavaScript logic is located in `convert.js`, and the sample data is provided in `data.xml`. The final C# implementation should replicate the functionality of the JavaScript code while adhering to C# best practices.

## Goal

By the end of this exercise, you will:
1. Understand how to use GitHub Copilot to assist with code migration.
2. Successfully convert JavaScript logic into C#.
3. Validate the migrated C# code using the provided XML data.

## Tasks

1. **Review the JavaScript Code**  
   Open the `convert.js` file and review the logic implemented in JavaScript. Understand how it processes the `data.xml` file.

2. **Set Up a C# Project**  
   - Create a new C# console application using the .NET CLI:
     ```bash
     dotnet new console -n MigrationProject
     ```
   - Open the newly created project in Visual Studio Code.

3. **Migrate the Logic**  
   - Use GitHub Copilot to assist in converting the JavaScript logic from `convert.js` into a C# equivalent.  
   - Ensure the migrated code reads and processes the `data.xml` file correctly.

4. **Test the C# Code**  
   - Add the `data.xml` file to your C# project.
   - Write a test or a simple validation script to ensure the C# implementation produces the same output as the original JavaScript code.

5. **Document the Migration**  
   - Write a short summary of the migration process, including any challenges you faced and how GitHub Copilot helped.

6. **Bonus Task**  
   - Refactor the C# code to improve readability and maintainability. Use GitHub Copilot to suggest improvements.

---------------
[Previous](./03-Migration.md) | [Next](./04-Bicep.md)