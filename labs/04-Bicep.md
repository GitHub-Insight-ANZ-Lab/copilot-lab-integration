 
# Exercise 4 Bicep

## Scenario

You are tasked with deploying a scalable cloud infrastructure on Azure for a full-stack web application that includes:

- Azure App Service (React Frontend) for hosting the React app.
- Azure App Service (Backend) for hosting the .NET backend API.
- Azure Function App for running serverless .NET functions.
- Azure Key Vault for storing secrets.
- Azure SQL Database for storing backend data.
- Azure Storage Account for static content, WebJobs, and logs.
- Azure Log Analytics and Application Insights for monitoring and logging.

You will write Bicep files to provision these resources, with the help of GitHub Copilot to guide you and provide code suggestions.

## Goal

Learn how to use Bicep, with the assistance of GitHub Copilot, to build a cloud infrastructure in Azure for hosting a full-stack React and .NET application, including a .NET Function App.

## Tasks

Update `main.bicep` to create the following resources:

#### Task 1: Provision Log Analytics and Application Insights

**Objective:** Configure Azure Log Analytics and Application Insights for monitoring and logging.

**Steps:**

1. Add resources for an Azure Log Analytics workspace.
2. Add an Application Insights resource for tracking App Services and the Function App.
3. Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:** Type `resource logAnalyticsWorkspace` and `resource applicationInsights` and use Copilot to help with setting up the resources.

#### Task 2: Create an Azure Storage Account

**Objective:** Provision a storage account for storing static content, WebJobs, and logs.

**Steps:**

1. Add a resource block to create an Azure Storage Account.
2. Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:** Start typing `resource storageAccount` and let Copilot assist with completing the resource configuration.

#### Task 3: Create an Azure Key Vault

**Objective:** Create an Azure Key Vault to store secrets.

**Steps:**

1. Add a resource block to create an Azure Key Vault.
2. Configure the key vault to enable soft delete and purge protection.
3. Configure the key vault to enable Role-Based Access Control (RBAC).
4. Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:**

- Start typing `// keyVault with enable rbac authorization, purge protection and soft delete for 7 days` and let Copilot assist with completing the resource configuration.
- Copilot might reference `tenantId` from a non-existent variable. Use Copilot to help troubleshoot the error.

#### Task 4: Create an Azure SQL Database with Bicep Module

**Objective:** Set up a SQL Database for the .NET backend using a Bicep module to allow for reusable infrastructure.

**Steps:**

1. Create a Bicep module:
   - In a new folder (e.g. `modules`), create a Bicep module file `sqlDatabase.bicep` that provisions both the Azure SQL Server and SQL Database resources.
   - The module should take in variables for key properties like the SQL Server name, resource group, sku name, admin username, admin password and etc.
   - The module should add the SQL Server Connection String to the Azure Key Vault.
2. Pass variables to the module:
   - In the `main.bicep` file, call the SQL Database module, passing in the required variables for the SQL Server and Database.
3. Output the connection string:
   - Output the SQL Server name, SQL Database name, and SQL Server FQDN and the connection string key vault secret name.
4. Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:**

- Use Copilot to assist with creating the SQL Server and Database resource blocks inside the module.
- You can start with the resource block `resource sqlServer` and `resource sqlDatabase`, but the goal is to modularize these resources.

#### Task 5: Create Azure App Services (.NET Backend)

**Objective:** Deploy Azure App Service for the .NET backend API.

**Steps:**

1. Create a shared App Service Plan to host your apps and functions.

**Hint:** Start typing `resource appServicePlan`, and let Copilot assist in configuring the resource.

2.  - Add resource blocks for both Azure App Services, linking them to the shared App Service Plan.
    - Configure app settings for both apps:
      - React frontend: Set the App Insights Instrumentation Key.
      - .NET backend:
        - Set the SQL Database connection string by referencing the key vault secret name created in Task 4.
        - Set Application Insights Instrumentation Key.
3.  Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:** Start typing `// appServicePlan to host a react app`, and let Copilot assist in configuring both apps. Use Copilot to assist with configuring the app settings for both apps.

#### Task 6: Create and Configure Azure Function App (for .NET)

**Objective:** Deploy a .NET-based Azure Function App and configure it to use the Storage Account and Application Insights for monitoring.

**Steps:**

1. Add a resource block for an Azure Function App, linking it to the same App Service Plan.
2. Configure app settings for the Function App:
   - Set the Application Insights Instrumentation Key.
   - Set the SQL Database connection string.
   - Ensure the AzureWebJobsStorage is set to the connection to the Storage Account.
   - Ensure the function worker runtime and extension version are set.
3. Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:** Start typing `resource functionApp`, and Copilot will guide you through configuring it for a .NET function. Include settings for the instrumentation key AzureWebJobsStorage and all required settings to run the function app.

#### Task 7: Create parameters file for your environment

**Objective:** Create a parameters file to store environment-specific values.

**Steps:**

1. Create a Bicep parameters file (e.g. `main.dev.bicepparam`)
2. Fill in the `main.dev.bicepparam` file with the required parameters.

   **Hint:** Ensure you have `main.bicep` file open in a separate tab. Copilot will assist with suggestions for the variables.

3. Run `az deployment group validate` with the required parameters to validate the Bicep file against Azure.

   **Hint:** Open the terminal, press `ctrl + I` or `cmd + I` to open Github Copilot chat and type `az deployment validate using main.dev.bicepparam parameters`. GitHub Copilot will assist with the command.


---------------
[Previous](./04-Bicep.md) | [Next](./05-CICD.md)
