const fs = require('fs');
const xml2js = require('xml2js');
const Table = require('cli-table3');

// Read the XML file
const xmlFilePath = 'data.xml';
fs.readFile(xmlFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading XML file:', err);
    return;
  }

  // Parse the XML data
  const parser = new xml2js.Parser();
  parser.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    // Extract book data
    const books = result.bookstore.book;

    // Create a table
    const table = new Table({
      head: ['Category', 'Title', 'Authors', 'Year', 'Price'],
      colWidths: [15, 30, 40, 10, 10],
    });

    // Populate the table with book data
    books.forEach((book) => {
      const category = book.$.category;
      const title = book.title[0]._;
      const authors = book.author.join(', ');
      const year = book.year[0];
      const price = book.price[0];

      table.push([category, title, authors, year, price]);
    });

    // Print the table
    console.log(table.toString());
  });
});