const fs = require('fs');
const path = require('path');

const csvPath = path.join(process.cwd(), 'data', 'Ajisai_Menu_FULL.csv');
const fileContent = fs.readFileSync(csvPath, 'utf8');

const lines = fileContent.split('\n').filter(l => l.trim().length > 0);
const headers = lines[0].split(',').map(h => h.trim());

const categories = {};
// Preserve order
const categoryOrder = [];

// Helper to handle CSV quotes
const parseLine = (line) => {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}

for (let i = 1; i < lines.length; i++) {
    const cols = parseLine(lines[i]);
    // Category, Name, Description, Price
    const categoryName = cols[0];
    const name = cols[1];
    const description = cols[2];
    const price = cols[3];

    if (!categoryName || !name) continue;

    if (!categories[categoryName]) {
        categories[categoryName] = [];
        categoryOrder.push(categoryName);
    }

    categories[categoryName].push({
        name,
        price,
        description: description || ""
    });
}

const finalData = categoryOrder.map(catTitle => {
    return {
        id: catTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        title: catTitle,
        description: "", // Default empty description as CSV doesn't have it
        items: categories[catTitle]
    };
});

console.log(JSON.stringify(finalData, null, 2));
