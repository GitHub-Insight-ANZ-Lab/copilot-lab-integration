# Exercise 1: Automating File Renaming with GitHub Copilot

## Scenario

You are working with a large number of data dump files named `datadump-*.dat` in a directory. To better organize these files, you need to rename each file to include the current date in its filename, e.g., `datadump_2025-04-17.dat`.

## Goal

Use GitHub Copilot to assist in writing a PowerShell script that automates the renaming of these files.

## Tasks

1. **Set Up the Environment**  

   - Sample `datadump-xx.dat` are in the `labs\lab01\` folder.

2. **Write the Script**  

   - Use GitHub Copilot to generate a PowerShell script that:

     - Iterates through all `datadump.dat` files in the directory.
     - Appends the current date (in `YYYY-MM-DD` format) to each filename.
     - Ensures no files are overwritten during the renaming process.

3. **Test the Script**  
   - Run the script in your test directory and verify that all files are renamed correctly.

4. **Enhance the Script**  
   - Modify the script to handle cases where files with the same name already exist (e.g., append a unique number to the filename).

5. **Document the Process**  
   - Add comments to your script to explain each step.
   - Write a short summary of how GitHub Copilot helped you complete the task.

---------------
[Previous](./01-Powershell.md) | [Next](./02-Transformation.md)