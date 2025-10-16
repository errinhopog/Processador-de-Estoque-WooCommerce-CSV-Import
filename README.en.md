<!--
English README for the Athos -> WooCommerce CSV processor
-->
# Inventory Processor — WooCommerce (v4.1)

Tool to convert CSV files exported from Athos ERP into a WooCommerce import-ready CSV. It features automatic brand detection, intelligent weight/volume extraction, and per-category output options.

Main features
- Automatic brand detection (supports 160+ brands)
- Intelligent weight/volume extraction from product titles (e.g. 15kg, 500g, 750ml)
- Generates a single WooCommerce import CSV with all products
- Optionally generates separate CSV files per category
- Title Case formatting for product names
- Includes "Brand" as attribute and meta field
- Basic validations (minimum price, stock, SKU) and execution logs

Requirements
- Node.js v18 or later
- npm (or yarn)

Quick install
1. Copy the example configuration file:

   - Windows (PowerShell):
     copy config.example.json config.json

   - Linux/macOS:
     cp config.example.json config.json

2. Install dependencies:

   npm install

Usage
- Place your input CSV (default `athos.csv`) in the project root or update the path in `config.json`.
- Run the processor:

  - On Windows: double-click `processarEstoque-v4.1.bat` or run:

    node processador-estoque-v4.1.js

Output files (default)
- `saida_estoque/woocommerce_import_TODOS_YYYY-MM-DDTHH-mm-ss.csv` — single file with all products for WooCommerce import
- `saida_estoque/[CATEGORY]_YYYY-MM-DDTHH-mm-ss.csv` — per-category files (optional)
- `saida_estoque/metadata_v4.json` — processing statistics
- `saida_estoque/log_execucao_v4_[timestamp].json` — detailed execution log

Configuration
- Edit `config.example.json`, set the desired options and save as `config.json`. Main keys:
  - `arquivos.entrada` — input CSV path (default: `athos.csv`)
  - `arquivos.pastaSaida` — output folder (default: `saida_estoque`)
  - `processamento.precoMinimo` — minimum price validation
  - `processamento.incluirProdutosSemEstoque` — include products with zero stock

Best practices
- Keep a backup of the original CSV file.
- Test with a small subset before processing the full dataset.

Contributing
- To add brands or improvements, see `CONTRIBUTING.md`. Known brands are usually stored in the `marcasConhecidas` variable in the main processor file.

License
- This project is licensed under the MIT License. See `LICENSE`.

Examples and reference files
- `EXEMPLO-CSV-CONVERTIDO.csv` — sample converted output

Support / Contact
- Internal tool for AquaFlora Agroshop. For questions, open an issue or contact the development team.
