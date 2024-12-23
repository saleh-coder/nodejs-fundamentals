---

### **modular-calculator/README.md**

````markdown
# Modular Calculator - ECMAScript Modules

This folder contains a multi-version calculator application built with ECMAScript modules, demonstrating progressive modularization and functionality.

## Versions

### Version 1 - Basic Operations

- **Structure**:
  - `calculations.js`: Functions for basic operations like sum and subtraction.
  - `index.js`: Entry point for testing basic operations.
- **Key Concepts**:
  - Exporting functions with `export` keyword.
  - Importing modules in `index.js`.

### Version 2 - Extended Operations

- **Structure**:
  - `calculations.js`: Adds multiplication and division functions.
  - `index.js`: Tests all operations.
- **Key Concepts**:
  - Adding more functions while maintaining modularity.

### Version 3 - Advanced Modularization

- **Structure**:
  - `basicCalculations.js`: Basic operations.
  - `complementaryCalculations.js`: Advanced operations (e.g., power, modulus).
  - `divisionCalculations.js`: Handles division logic.
  - `index.js`: Combines all modules to test advanced operations.
- **Key Concepts**:
  - Organizing advanced calculations into separate modules.
  - Using modular arithmetic for scalable design.

## How to Use

1. Navigate to the **modular-calculator/** folder.
2. Choose a version folder and run the `index.js` file:
   ```bash
   node --experimental-modules version_1/index.js
   ```
3. Experiment with different versions to understand modular growth.

Enjoy modular calculations! ➕➖✖️➗
````
