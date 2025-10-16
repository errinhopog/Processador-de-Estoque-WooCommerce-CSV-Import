# 🚀 Processador de Estoque WooCommerce v4.1# 🚀 Processador de Estoque WooCommerce v4.1# Athos to WooCommerce Converter



> **Sistema profissional de conversão CSV → WooCommerce com detecção inteligente de marcas e pesos**



[![Versão](https://img.shields.io/badge/versão-4.1.0-blue.svg)](https://github.com/)> **Sistema profissional de conversão CSV → WooCommerce com detecção inteligente de marcas e pesos****[🇧🇷 Versão em Português](docs/pt-BR/README.md)** | **[🇺🇸 English Version](README.md)**

# Processador de Estoque — WooCommerce (v4.1)

Ferramenta para converter arquivos CSV exportados do sistema Athos ERP para o formato de importação do WooCommerce. Faz detecção automática de marcas, extração de peso/volume e gera arquivos CSV prontos para importação.

Principais características
- Detecção automática de marcas (suporte a 160+ marcas)
- Extração inteligente de peso/volume a partir do nome do produto (ex.: 15kg, 500g, 750ml)
- Geração de arquivo CSV geral para importação no WooCommerce
- Geração opcional de arquivos separados por categoria
- Formatação de nomes (Title Case)
- Atributo “Marca” incluído como atributo e meta
- Validações básicas (preço mínimo, estoque, SKU) e logs de execução

Requisitos
- Node.js v18 ou superior
- npm (ou yarn)

Instalação rápida
1. Copie o arquivo de configuração de exemplo:

   - Windows (PowerShell):
     copy config.example.json config.json

   - Linux/macOS:
     cp config.example.json config.json

2. Instale dependências:

   npm install

Uso
- Coloque seu arquivo de entrada (por padrão `athos.csv`) na raiz do projeto ou atualize o caminho em `config.json`.
- Execute o processador:

  - No Windows: dê um duplo clique em `processarEstoque-v4.1.bat` ou rode no PowerShell:

    node processador-estoque-v4.1.js

Arquivos gerados (padrão)
- `saida_estoque/woocommerce_import_TODOS_YYYY-MM-DDTHH-mm-ss.csv` — arquivo único com todos os produtos para importar no WooCommerce
- `saida_estoque/[CATEGORIA]_YYYY-MM-DDTHH-mm-ss.csv` — arquivos por categoria (opcional)
- `saida_estoque/metadata_v4.json` — estatísticas do processamento
- `saida_estoque/log_execucao_v4_[timestamp].json` — log detalhado do processamento

Configuração
- Abra `config.example.json`, ajuste as opções desejadas e salve como `config.json`. Principais chaves:
  - `arquivos.entrada` — caminho do CSV de entrada (padrão: `athos.csv`)
  - `arquivos.pastaSaida` — pasta de saída (padrão: `saida_estoque`)
  - `processamento.precoMinimo` — validação de preço mínimo
  - `processamento.incluirProdutosSemEstoque` — incluir produtos com estoque zero

Boas práticas
- Faça backup do CSV original antes de processar.
- Teste com um pequeno subconjunto antes de processar o arquivo completo.

Contribuição
- Para adicionar novas marcas ou melhorias, veja `CONTRIBUTING.md`. Normalmente as marcas estão listadas na variável `marcasConhecidas` no arquivo principal do processador.

Licença
- Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE`.

Exemplos e arquivos de referência
- `EXEMPLO-CSV-CONVERTIDO.csv` — exemplo de saída já convertido

Contato
- Ferramenta destinada ao uso interno da AquaFlora Agroshop. Para dúvidas, abra uma issue ou entre em contato com a equipe de desenvolvimento.

---

node processador-estoque-v4.1.js

## 📁 Arquivos Gerados

```## Output Files

Após processar, você terá na pasta `saida_estoque/`:



| Arquivo | Descrição |

|---------|-----------|### Visualizar LogsThe processor generates the following files in the `saida_estoque` directory:

| `woocommerce_import_TODOS.csv` | **Todos os produtos** (importar no WooCommerce) |

| `AQUARISMO.csv`, `PET.csv`, etc. | Arquivos por categoria |```bash

| `metadata_v4.json` | Estatísticas completas do processamento |

| `log_execucao_v4_[data].json` | Log detalhado (auditoria) |# Duplo clique ou execute:- `woocommerce_import_TODOS.csv` - All products combined

| `ultimo_processamento_v4.json` | Resumo do último processamento |

verLogs.bat- `[Category].csv` - Separate file per category (e.g., Pet.csv, Aquarismo.csv)

---

```- `metadata_v4.json` - Processing statistics and metrics

## 🏷️ Marcas Suportadas (162)

- `log_execucao_v4_[timestamp].json` - Detailed execution log

### Pet Food

Royal Canin, Premier, Golden, Farmina, Pedigree, Whiskas, Special Dog, Special Cat, Guabi, Equilibrio, Magnus, Otal, Fórmula Natural, N&D, Gran Plus, Biofresh, PremieR Pet, Sabor & Vida...## ⚙️ Configuração- `ultimo_processamento_v4.json` - Latest processing summary



### Veterinária

NexGard, Bravecto, Frontline, Drontal, Revolution, Advocate, Seresto, Heartgard, Simparic, Comfortis...

### config.json - Opções Principais## Supported Brands

### Aquarismo

Alcon, Tetra, Sera, API, Seachem, Labcon, Azoo, Ocean Tech, Tropical...



### Piscina```json### Pet Food

Genco, Hidroall, HTH, Barrilha...

{Royal Canin, Premier, Golden, Farmina, Pedigree, Whiskas, Special Dog, Special Cat, Luck Dog, Luck Cat, Guabi, Equilibrio, and more

### Cutelaria

Tramontina, Corneta, Zebu, Guepardo...  "arquivos": {



### Pesca    "entrada": "athos.csv",### Veterinary

Marine Sports, Maruri, Saint, Shimano, Daiwa, Abu Garcia...

    "pastaSaida": "saida_estoque"NexGard, Bravecto, Frontline, Drontal, Revolution, Advocate, Seresto, Heartgard

### Insumos

Forth, Dimy, Vitaplan, Tecnutri, Nutriplan...  },



**Ver lista completa:** [CONTRIBUTING.md](CONTRIBUTING.md#adicionar-nova-marca) - Seção "Adicionar Nova Marca"  "processamento": {### Aquarium



---    "precoMinimo": 0.01,Alcon, Tetra, Sera, Tropical, Ocean Tech, Sarlo, Atman, Aquatech



## 📖 Documentação    "estoqueMinimo": 0,



### 📚 Guias Disponíveis    "incluirProdutosSemEstoque": true### Pool



| Documento | Conteúdo |  },Genco, Hidroazul, Bel Gard, HTH, Barranets

|-----------|----------|

| [CHANGELOG.md](CHANGELOG.md) | Histórico de versões e novidades |  "woocommerce": {

| [CONTRIBUTING.md](CONTRIBUTING.md) | Como contribuir e adicionar marcas |

| [LICENSE](LICENSE) | Licença MIT (uso livre) |    "publicarAutomaticamente": false,### Tools & Fishing



---    "permitirAvaliacoes": true,Tramontina, Marine Sports, Maruri, Daiwa, Shimano, Nautika



## 🐛 Problemas Comuns    "visibilidadeCatalogo": "visible"



### 1. Erro "Arquivo não encontrado"  },## CSV Format

```bash

❌ Erro: Arquivo 'athos.csv' não encontrado!  "saida": {

```

**Solução:** Verifique se o arquivo CSV está na pasta raiz ou configure o caminho correto em `config.json`.    "criarArquivoGeral": true,Output files follow WooCommerce Product CSV Import format with the following fields:



### 2. Produtos sem marca detectada    "criarArquivosPorCategoria": true,

```bash

⚠️ Aviso: 50 produtos sem marca detectada    "incluirMetadata": true,- SKU

```

**Solução:** Adicione as marcas faltantes em `processador-estoque-v4.1.js` (linha ~50). Veja [CONTRIBUTING.md](CONTRIBUTING.md#adicionar-nova-marca).    "formatoData": true- Name



### 3. Peso não extraído  }- Published status

```bash

ℹ️ Info: Peso não encontrado em "Produto XYZ"}- Stock information

```

**Solução:** O peso está em formato não reconhecido. Formatos aceitos: `15kg`, `500g`, `300ml`, `1l`, `1.5kg`, `750ml`.```- Pricing



---- Categories and Tags



## 🤝 Contribuir### Opções Detalhadas- Product descriptions



Quer adicionar marcas ou melhorar o código?- Weight



1. **Fork** este repositório| Campo | Tipo | Padrão | Descrição |- Custom meta fields (brand, original name, cost, margin)

2. **Adicione** sua marca ou melhoria

3. **Teste** com seus dados|-------|------|--------|-----------|

4. **Abra** um Pull Request

| `precoMinimo` | number | 0.01 | Preço mínimo para validação |## Processing Statistics

Veja o guia completo em [CONTRIBUTING.md](CONTRIBUTING.md).

| `estoqueMinimo` | number | 0 | Estoque mínimo necessário |

---

| `incluirProdutosSemEstoque` | boolean | true | Incluir produtos com estoque zero |Example output:

## 📊 Estatísticas do Projeto

| `publicarAutomaticamente` | boolean | false | Publicar produtos automaticamente |

- 💻 **Linguagem:** JavaScript (Node.js)

- 📦 **Dependências:** 2 (csv-parser, csv-writer)| `formatoData` | boolean | true | Adicionar timestamp aos arquivos |```

- 🏷️ **Marcas:** 162 no banco de dados

- ⚡ **Performance:** ~7.500 produtos/segundoProcessing time: 0.52s

- 📝 **Linhas de código:** ~850

- 🧪 **Testado com:** 4.000+ produtos reais## 📊 ResultadoLines processed: 3933



---Valid products: 3925



## 📝 Licença### Arquivos GeradosBrand detected: 401 (10.2%)



Este projeto está sob a licença **MIT**. Veja [LICENSE](LICENSE) para mais detalhes.Weight detected: 1191 (30.3%)



---```



## 🌟 Apoie o Projetosaida_estoque/Top 5 Brands:



Se este projeto te ajudou, considere:├── woocommerce_import_TODOS_2025-10-16T15-30-00.csv  # Todos produtos1. Golden: 61 products

- ⭐ Dar uma **estrela** no GitHub

- 🐛 Reportar **bugs** ou sugerir melhorias├── PET_2025-10-16T15-30-00.csv                       # Por categoria2. Special Dog: 45 products

- 🤝 Contribuir com **código** ou **marcas**

- 📢 Compartilhar com quem precisa!├── AQUARISMO_2025-10-16T15-30-00.csv                 # Por categoria3. Premier: 29 products



---├── ...4. Special Cat: 28 products



**Desenvolvido com ❤️ para facilitar a gestão de estoque no WooCommerce**├── metadata.json                                      # Estatísticas5. Sarlo: 22 products



**Versão:** 4.1.0 | **Status:** Produção | **Node:** ≥18.0.0├── ultimo_processamento.json                          # Log atual```


└── log_execucao_2025-10-16T15-30-00.json            # Log completo

```## Log Visualization



### Exemplo de RelatórioView detailed processing logs:



``````bash

📊 RELATÓRIO FINAL - VERSÃO 4.1.0node visualizar-logs.js

==================================================```

⏱️  Tempo de processamento: 0.51s

📄 Linhas processadas: 5.234## Version History

✅ Produtos válidos: 3.925

❌ Produtos inválidos: 23### v4.0 (Current)

📦 Produtos sem estoque: 1.456- Added automatic brand detection (119+ brands)

🏷️  Total de categorias: 13- Enhanced weight extraction algorithm

- Removed version suffixes from output files

🆕 DETECÇÃO INTELIGENTE:- Added brand field to WooCommerce meta

   🏷️  Produtos com MARCA detectada: 2.847 (72.5%)- Improved product descriptions with brand and weight

   ⚖️  Produtos com PESO detectado: 1.923 (49.0%)- Automatic tag generation including brands

   🗃️  Banco de dados: 162 marcas

### v3.0

🏆 Top 5 Marcas Mais Encontradas:- Title Case formatting

   1. Alcon: 456 produtos- Automatic quote removal

   2. Royal Canin: 234 produtos- Brand-specific corrections

   3. Golden: 189 produtos- SEO-friendly descriptions

   4. Premier: 156 produtos

   5. Tetra: 134 produtos### v2.0

```- Performance optimization

- Category-based file generation

## 📖 Documentação- Comprehensive logging system



### Estrutura do Projeto### v1.0

- Initial release

```- Basic CSV conversion

AquaFlora-Estoque/

├── processador-estoque-v4.1.js    # 🎯 Processador principal## Architecture

├── processarEstoque-v4.1.bat      # Windows launcher

├── config.json                     # Configurações```

├── config.example.json             # Template de configAquaFlora Estoque/

├── package.json                    # Dependências Node.js├── processador-estoque-v4.js    # Main processor

├── athos.csv                       # 📥 Arquivo de entrada├── visualizar-logs.js            # Log viewer utility

├── saida_estoque/                  # 📤 Arquivos gerados├── config.json                   # Configuration file

├── visualizar-logs.js              # Visualizador de logs├── package.json                  # Dependencies

├── verLogs.bat                     # Launcher logs├── processarEstoque-v4.bat       # Windows launcher

├── README.md                       # Documentação└── saida_estoque/                # Output directory

└── LICENSE                         # Licença MIT    ├── *.csv                     # Category CSV files

```    ├── metadata_v4.json          # Statistics

    └── *.json                    # Execution logs

### Campos CSV de Saída (WooCommerce)```



| Campo | Descrição | Exemplo |## Development

|-------|-----------|---------|

| SKU | Código único do produto | `12345` |### Adding New Brands

| Name | Nome formatado | `Ração Golden Adulto 15Kg` |

| Published | Publicado? | `1` ou `0` |Edit the `marcasConhecidas` object in `processador-estoque-v4.js`:

| Stock | Quantidade em estoque | `150` |

| Regular price | Preço de venda | `89.90` |```javascript

| Weight (kg) | Peso detectado | `15.000` |this.marcasConhecidas = {

| Categories | Categoria formatada | `Pet` |  'brand name': 'Brand Name',

| Tags | Tags automáticas | `Pet, Golden, Premium` |  // Add more brands here

| Attribute 1 name | Nome do atributo | `Marca` |};

| Attribute 1 value(s) | Valor do atributo | `Golden` |```

| Meta: _marca | Marca detectada | `Golden` |

| Meta: _custo | Custo do produto | `65.00` |### Extending Weight Detection

| Meta: _margem | Margem % | `38.31` |

Modify the `extrairPeso()` method to support additional weight formats.

### Detecção de Marcas

## Performance

O sistema reconhece **162 marcas** automaticamente, incluindo:

- Processes 4000+ products in ~0.5 seconds

**Pet:** Royal Canin, Premier, Golden, Farmina, Pedigree, Whiskas, Guabi, etc.  - Memory efficient streaming CSV parsing

**Aquarismo:** Alcon, Tetra, Sera, Tropical, Ocean Tech, etc.  - Optimized for large datasets

**Veterinária:** NexGard, Bravecto, Frontline, Revolution, etc.  - Minimal CPU usage

**Piscina:** Genco, Hidroazul, HTH, Bel Gard, etc.  

**Ferramentas:** Tramontina, Vonder, Western, etc.## Error Handling



### Detecção de Peso- Invalid products are logged but don't stop processing

- Detailed error messages in execution logs

Padrões reconhecidos:- Statistics on invalid entries

- `10kg`, `10.5kg`, `10,5kg`

- `500g`, `500 gramas`## Contributing

- `500ml`, `2L`, `2 litros`

This is a private business tool. For internal use only.

Conversão automática para kg (formato WooCommerce).

## License

## 🔧 Desenvolvimento

Proprietary - AquaFlora Agroshop

### Requisitos

- Node.js v18.20.8+## Support

- npm v10.8.2+

For questions or issues, please contact the development team.

### Dependências

```json## Technical Details

{

  "csv-parser": "^3.0.0",- **Language**: JavaScript (Node.js)

  "csv-writer": "^1.6.0"- **CSV Parser**: csv-parser

}- **CSV Writer**: csv-writer

```- **Encoding**: UTF-8

- **Date Format**: ISO 8601

### Executar Testes- **Locale**: pt-BR (Brazilian Portuguese)

```bash

# Processar arquivo de teste## Best Practices

node processador-estoque-v4.1.js

```1. Always backup your `athos.csv` before processing

2. Review `metadata_v4.json` after each run

## 📝 Changelog3. Validate a few products before importing to WooCommerce

4. Use `visualizar-logs.js` to analyze processing results

### v4.1.0 (2025-10-16) - ATUAL5. Keep `config.json` updated with your preferences

- ✅ Detecção automática de 162 marcas

- ✅ Extração inteligente de peso/volume## Changelog

- ✅ Atributo "Marca" visível no WooCommerce

- ✅ Descrições HTML enriquecidas com SEOSee [CHANGELOG.md](CHANGELOG.md) for detailed version history.

- ✅ Validação de preço vs custo

- ✅ Alertas para valores anormais## FAQ

- ✅ Arquivos sem sufixos de versão

- ✅ Logs JSON detalhados**Q: Does this work ONLY with Athos ERP?**  

- ✅ Estatísticas de detecçãoA: Yes, this converter is specifically designed for Athos ERP CSV exports. For other ERPs, you'll need to adapt the code.



### v4.0.0 (2025-10)**Q: Can I process files with different encodings?**  

- ✅ Sistema de detecção de marcasA: The processor expects UTF-8 encoded CSV files.

- ✅ Extração básica de peso

- ✅ Formatação inteligente de nomes**Q: How do I add custom brands?**  

A: Edit the `marcasConhecidas` object in the main processor file.

### v3.0.0 (2025-09)

- ✅ Export por categoria**Q: What if weight detection fails?**  

- ✅ Validações básicasA: Products without detected weight will have an empty Weight field. You can manually add it in WooCommerce.



## 📄 Licença**Q: Can I customize the output format?**  

A: Yes, modify the `obterHeaderCSV()` method to add or remove fields.

MIT License - Veja [LICENSE](LICENSE) para detalhes.

**[📚 More FAQs in Portuguese](docs/pt-BR/FAQ.md)**

Copyright (c) 2025 AquaFlora Agroshop

## System Requirements

---

- **OS**: Windows 10/11, Linux, macOS

## 🆘 Suporte- **RAM**: Minimum 512MB (recommended 1GB)

- **Disk**: 100MB free space

**Problemas?** Abra uma issue no GitHub  - **Node.js**: Version 14.0 or higher

**Dúvidas?** Consulte a documentação completa  

**Contribuir?** Veja [CONTRIBUTING.md](CONTRIBUTING.md)## How It Works with Athos ERP



---### 1. Athos Export



**Versão:** 4.1.0  Athos ERP exports inventory data in CSV format with this structure:

**Status:** ✅ Produção  

**Última atualização:** 16/10/2025  ```csv

**Autor:** AquaFlora Agroshop Development Team"Company","CNPJ","Address",...,"Departamento: CATEGORY",...

"Company Name",...,"Code","Description","Stock","Minimum","Price","Cost",...
```

### 2. Processing

The converter:
1. Reads the CSV exported from Athos
2. Identifies categories (Departments)
3. Extracts product data (SKU, name, stock, price)
4. Automatically detects brands
5. Extracts weight from title
6. Formats for WooCommerce

### 3. WooCommerce Import

Generated CSV files can be imported directly into WooCommerce:
- Menu: Products → Import
- Select CSV file
- Map fields (already correct)
- Import!

## Athos CSV Format

The converter expects the standard Athos export format:

```
Company header
Report header
"Departamento: CATEGORY_NAME"
Column headers
Product data
```

**Expected fields per product:**
- Code (SKU)
- Description (Product name)
- Stock (Quantity)
- Minimum (Minimum stock)
- Price (Sale price)
- Cost (Product cost)

## Adapting to Other ERPs

If you need to adapt this tool for an ERP other than Athos:

1. Modify the `processarLinha()` method for the new CSV format
2. Adjust `extrairNomeCategoria()` as needed
3. Adapt `extrairDadosProduto()` for new fields
4. Test extensively with your data

The code is well-structured and documented to facilitate adaptations.

## Compatibility

- **Athos ERP**: All versions that export CSV
- **WooCommerce**: 5.0+
- **WordPress**: 5.0+

---

**Athos ERP** → **This Converter** → **WooCommerce** 🚀

Built with precision for inventory management.
