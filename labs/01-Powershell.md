# Exercise 1 - Powershell

## Scenario

In this exercise, You are working on processing data dump files named `datadump-*.dat` in a directory. To better organize these files, you need to rename each file to include the current date in its filename, e.g., `datadump_2025-04-17.dat`.

## Goal

Use GitHub Copilot to assist with writing a PowerShell script that automates the renaming of these files.

## Tasks

### Step 1: Set Up the Environment

Sample `datadump-xx.dat` are in the `labs\lab01\` folder. They are text files containing a dump of report.

### Step 2: Write the Script

Use GitHub Copilot to generate a PowerShell script `rename.ps1` that:

- Iterates through all `datadump.dat` files in the directory.
- Copy each file to a new file to `storage` folder
- Appends the current date (in `YYYY-MM-DD` format) to each filename. e.g. datadump1-2025-04-01.dat

### Step 3: Test the Script

- Run the `rename.ps1` script in your `lab02` directory and verify that all files are renamed correctly.
- If you are not sure how to run powershell script, ask copilot for help and follow instructions.

### Step 4: Enhance the Script

Modify the script to read the date from the first line of the file.

### Step 5: Document the Process

Use `inline chat` to ask copilot to add comments to your script to explain each step.

---------------
[Previous](./00-GetStarted.md) | [Next](./02-Transformation.md)