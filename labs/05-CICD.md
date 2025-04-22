 
# Exercise 5 - CI / CD

## Scenario

GitHub Copilot will assist you in generating the necessary Dockerfile and YAML configuration and commands for GitHub Actions workflow.

## Goal

The goal of this exercise is to use GitHub Actions workflow to build, test and dockerize a sample .NET Core application. You will use GitHub Copilot to help you write the necessary Dockerfile and YAML configuration and commands for the workflow.

## Tasks

### Step 1: Create a Dockerfile to package the application

- Create a Dockerfile in the root directory of your `labs\lab05\sample_dotnet_app` and name the file `Dockerfile`.
- Start by typing FROM in a new Dockerfile. GitHub Copilot will suggest the appropriate .NET Core SDK base image.

**Tip:** Use Copilot's suggestions to add commands like COPY, WORKDIR, and RUN to copy the application files and restore dependencies.

### Step 2: Add Build and Test App Job

- Modify your GitHub Actions workflow to include a job called `build_app` for building and testing the .NET Core application.

**Tip:** In the workflow file, Copilot will suggest a few steps to build and test the .NET Core application.

### Step 3: Checkout code

- Add a step to check out the code from the repository using the `actions/checkout@v2` action.

**Tip:** Under steps, start typing `- name: Checkout code` in the workflow YAML file, and Copilot will suggest the correct syntax for checking out the code.

### Step 4: Install .NET Core SDK

- Add a step to install the .NET Core SDK.
- Start typing `- name: Install .NET Core SDK` in the workflow YAML file, and Copilot will suggest the correct syntax for installing the SDK.

**Tip:** Copilot will offer the correct syntax for installing the .NET Core SDK, ensuring the correct version is used.

### Step 5: Build the .NET Core Application

- Add a step that builds the application using `dotnet build` command.

**Tip:** 

- Begin by typing `- name: Build App`, and let Copilot generate the necessary actions to install .NET Core, check out the code, and run dotnet build.
- Add the following property to the step: `working-directory: ${{ github.workspace }}/sample_dotnet_app`.

### Step 6: Run Unit Tests

- Add a step in the workflow to run unit tests using `dotnet test` command.

**Tip:** 

- Type `- name: Run tests` in your workflow YAML file, and Copilot will offer the complete step for running dotnet test with useful flags like --no-build.
- Add the following property to the step: `working-directory: ${{ github.workspace }}/sample_dotnet_app/TodoApi.Test`.

### Step 7: Publish the Application

- Add a step for publishing the application using `dotnet publish` command.
- Start typing dotnet publish, and Copilot will suggest the command along with options for specifying the output directory.

**Tip:** 

- Type `- name: Publish App` in your workflow YAML file and Copilot will suggest the complete step for publishing the application.
- Copilot will autocomplete options such as `-c Release -o ./publish`, ensuring your published files are properly placed for later packaging into a Docker image.
- Start typing `working-directory:` in a new line and Copilot will suggest the correct path to the application directory.

### Step 8: Build a Docker Image

- Add a step to build a Docker image using the Dockerfile you created.
- When you type docker build, GitHub Copilot will suggest the complete command, including the context and tagging of the image.

**Tip:** As you start typing: `- name: Build Docker image`, Copilot will generate the complete Docker build command `docker build -t my-app:latest .` and any necessary options.

---------------
[Previous](./04-Bicep.md) | [Next](./06-APIM.md)