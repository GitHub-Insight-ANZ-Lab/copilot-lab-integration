# Exercise 2: Transform CSV to JSON with GitHub Copilot

In this exercise, you will use GitHub Copilot to assist in writing a Node.js program that transforms a CSV file (`product.csv`) into a JSON file. The program should respect the column data types, such as converting the `price` column to `integer`.

## Scenario

You are working on a data transformation pipeline where you need to convert a CSV file containing product information into a JSON format. The CSV file includes columns such as `id`, `name`, `price`, and `category`. Your task is to write a Node.js script that reads the CSV file, processes the data, and outputs a JSON file while ensuring that the `price` column is converted to an integer.

## Goal

By the end of this exercise, you will:

1. Write a Node.js script to transform a CSV file into a JSON file.
2. Use GitHub Copilot to assist in generating the code.
3. Ensure that the `price` column is converted to an integer in the resulting JSON.

## Tasks

1. **Set up the environment**:
   - Create a new Node.js project using `npm init`.
   - Install necessary dependencies such as `csv-parser` or any other library for parsing CSV files.

2. **Write the Node.js script**:
   - Use GitHub Copilot to help you write a script that:
     - Reads the `product.csv` file.
     - Converts the data into JSON format.
     - Ensures that the `price` column is parsed as an integer.
     - Writes the output to a file named `product.json`.

3. **Test the script**:
   - Run the script to ensure it correctly transforms the CSV file into JSON.
   - Verify that the `price` column is an integer in the output.

4. **Bonus Task**:
   - Add error handling to your script to manage cases where the CSV file is missing or contains invalid data.

---------------
[Previous](./02-Transformation.md) | [Next](./03-Migration.md)