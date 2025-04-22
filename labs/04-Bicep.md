 
# Exercise 4 - Bicep

## Scenario

You are tasked with deploying a scalable cloud infrastructure on Azure for a full-stack web application that includes:

- Azure Log Analytics and Application Insights for monitoring and logging.
- Azure Storage Account for static content, WebJobs, and logs.
- Azure Key Vault for storing secrets.
- Azure SQL Database for storing backend data.

## Goal

You will write Bicep files to provision these resources, with the help of GitHub Copilot to guide you and provide code suggestions.

Learn how to use Bicep, with the assistance of GitHub Copilot, to build a cloud infrastructure in Azure.

## Tasks

Update `main.bicep` to create the following resources:

### Exercise 1: Provision Log Analytics and Application Insights

Configure Azure Log Analytics and Application Insights for monitoring and logging.

- Add resources for an Azure Log Analytics workspace.
- Add an Application Insights resource for tracking App Services and the Function App.
   Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:** Type `resource logAnalyticsWorkspace` and `resource applicationInsights` and use Copilot to help with setting up the resources.

### Exercise 2: Create an Azure Storage Account

Provision a storage account for storing static content, WebJobs, and logs.

- Add a resource block to create an Azure Storage Account.
- Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:** Start typing `resource storageAccount` and let Copilot assist with completing the resource configuration.

### Exercise 3: Create an Azure Key Vault

Create an Azure Key Vault to store secrets.

- Add a resource block to create an Azure Key Vault.
- Configure the key vault to enable soft delete and purge protection.
- Configure the key vault to enable Role-Based Access Control (RBAC).
- Run `az bicep lint --file main.bicep` to validate your Bicep file.

**Hint:**

- Start typing `// keyVault with enable rbac authorization, purge protection and soft delete for 7 days` and let Copilot assist with completing the resource configuration.
- Copilot might reference `tenantId` from a non-existent variable. Use Copilot to help troubleshoot the error.

### Exercise 4: Create an Azure SQL Database with Bicep Module

Set up a SQL Database resource using a Bicep module to allow for reusable infrastructure.

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

### Exercise 5: Create parameters file for your environment

Create a parameters file to store environment-specific values.

- Create a Bicep parameters file (e.g. `main.dev.bicepparam`)
- Fill in the `main.dev.bicepparam` file with the required parameters.

**Hint:** Ensure you have `main.bicep` file open in a separate tab. Copilot will assist with suggestions for the variables.

- Run `az deployment group validate` with the required parameters to validate the Bicep file against Azure.

**Hint:** Open the terminal, press `ctrl + I` or `cmd + I` to open Github Copilot chat and type `az deployment validate using main.dev.bicepparam parameters`. GitHub Copilot will assist with the command.

---------------
[Previous](./03-Migration.md) | [Next](./05-CICD.md)
