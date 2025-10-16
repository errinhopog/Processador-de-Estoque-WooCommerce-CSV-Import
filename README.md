# 🚀 Processador de Estoque WooCommerce v4.1# 🚀 Processador de Estoque WooCommerce v4.1# 🚀 Processador de Estoque WooCommerce v4.1# Athos to WooCommerce Converter



> **Sistema profissional de conversão CSV → WooCommerce com detecção inteligente de marcas e pesos**



[![Versão](https://img.shields.io/badge/versão-4.1.0-blue.svg)](https://github.com/)> **Sistema profissional de conversão CSV → WooCommerce com detecção inteligente de marcas e pesos**

[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

[![Licença](https://img.shields.io/badge/licença-MIT-green.svg)](LICENSE)

[![Status](https://img.shields.io/badge/status-produção-success.svg)]()

[![Versão](https://img.shields.io/badge/versão-4.1.0-blue.svg)](https://github.com/)> **Sistema profissional de conversão CSV → WooCommerce com detecção inteligente de marcas e pesos****[🇧🇷 Versão em Português](docs/pt-BR/README.md)** | **[🇺🇸 English Version](README.md)**

Converte arquivos CSV exportados do **Athos ERP** para formato de importação do **WooCommerce** com detecção automática de 160+ marcas e extração inteligente de peso/volume.

# Processador de Estoque — WooCommerce (v4.1)

---

Ferramenta para converter arquivos CSV exportados do sistema Athos ERP para o formato de importação do WooCommerce. Faz detecção automática de marcas, extração de peso/volume e gera arquivos CSV prontos para importação.

## 📋 Índice

Principais características

- [Recursos](#-recursos)- Detecção automática de marcas (suporte a 160+ marcas)

- [Instalação](#-instalação-rápida)- Extração inteligente de peso/volume a partir do nome do produto (ex.: 15kg, 500g, 750ml)

- [Uso](#-uso)- Geração de arquivo CSV geral para importação no WooCommerce

- [Configuração](#-configuração)- Geração opcional de arquivos separados por categoria

- [Arquivos Gerados](#-arquivos-gerados)- Formatação de nomes (Title Case)

- [Marcas Suportadas](#️-marcas-suportadas)- Atributo “Marca” incluído como atributo e meta

- [Problemas Comuns](#-problemas-comuns)- Validações básicas (preço mínimo, estoque, SKU) e logs de execução

- [Contribuir](#-contribuir)

- [Licença](#-licença)Requisitos

- Node.js v18 ou superior

---- npm (ou yarn)



## ✨ RecursosInstalação rápida

1. Copie o arquivo de configuração de exemplo:

### 🎯 Detecção Inteligente

   - Windows (PowerShell):

- ✅ **160+ Marcas** reconhecidas automaticamente (Royal Canin, Alcon, Premier, Tetra, etc.)     copy config.example.json config.json

- ✅ **Peso/Volume** extraído do nome (15kg, 500g, 300ml, etc.)

- ✅ **Formatação automática** de nomes e categorias (Title Case)   - Linux/macOS:

- ✅ **Tags inteligentes** baseadas em marca e características     cp config.example.json config.json



### 📊 Validação e Qualidade2. Instale dependências:



- ✅ **Validação de dados** (preço mínimo, estoque, SKU)   npm install

- ✅ **Alertas automáticos** (preço < custo, valores anormais)

- ✅ **Logs detalhados** com rastreamento completoUso

- ✅ **Estatísticas em tempo real** durante processamento- Coloque seu arquivo de entrada (por padrão `athos.csv`) na raiz do projeto ou atualize o caminho em `config.json`.

- Execute o processador:

### 🛒 WooCommerce Ready

  - No Windows: dê um duplo clique em `processarEstoque-v4.1.bat` ou rode no PowerShell:

- ✅ **100% compatível** com importador WooCommerce

- ✅ **Atributos customizados** (Marca visível na página do produto)    node processador-estoque-v4.1.js

- ✅ **Descrições SEO** otimizadas automaticamente

- ✅ **Meta fields** para controle interno (custo, margem, estoque mínimo)Arquivos gerados (padrão)

- `saida_estoque/woocommerce_import_TODOS_YYYY-MM-DDTHH-mm-ss.csv` — arquivo único com todos os produtos para importar no WooCommerce

### 📁 Organização- `saida_estoque/[CATEGORIA]_YYYY-MM-DDTHH-mm-ss.csv` — arquivos por categoria (opcional)

- `saida_estoque/metadata_v4.json` — estatísticas do processamento

- ✅ **Export geral** com todos os produtos- `saida_estoque/log_execucao_v4_[timestamp].json` — log detalhado do processamento

- ✅ **Export por categoria** (arquivos separados)

- ✅ **Metadata JSON** com estatísticas completasConfiguração

- ✅ **Logs JSON** para auditoria- Abra `config.example.json`, ajuste as opções desejadas e salve como `config.json`. Principais chaves:

  - `arquivos.entrada` — caminho do CSV de entrada (padrão: `athos.csv`)

---  - `arquivos.pastaSaida` — pasta de saída (padrão: `saida_estoque`)

  - `processamento.precoMinimo` — validação de preço mínimo

## 🚀 Instalação Rápida  - `processamento.incluirProdutosSemEstoque` — incluir produtos com estoque zero



### 1. Pré-requisitosBoas práticas

- Faça backup do CSV original antes de processar.

```bash- Teste com um pequeno subconjunto antes de processar o arquivo completo.

Node.js v18.0.0 ou superior

npm (incluído com Node.js)Contribuição

```- Para adicionar novas marcas ou melhorias, veja `CONTRIBUTING.md`. Normalmente as marcas estão listadas na variável `marcasConhecidas` no arquivo principal do processador.



### 2. Instalar dependênciasLicença

- Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE`.

```bash

npm installExemplos e arquivos de referência

```- `EXEMPLO-CSV-CONVERTIDO.csv` — exemplo de saída já convertido



### 3. ConfigurarContato

- Ferramenta destinada ao uso interno da AquaFlora Agroshop. Para dúvidas, abra uma issue ou entre em contato com a equipe de desenvolvimento.

```bash

# Windows---

copy config.example.json config.json

node processador-estoque-v4.1.js

# Linux/Mac

cp config.example.json config.json## 📁 Arquivos Gerados

```

```## Output Files

### 4. Adicionar arquivo CSV

Após processar, você terá na pasta `saida_estoque/`:

Coloque seu arquivo `athos.csv` na pasta raiz (ou configure outro nome em `config.json`).



---

| Arquivo | Descrição |

## 💻 Uso

|---------|-----------|### Visualizar LogsThe processor generates the following files in the `saida_estoque` directory:

### Windows (Recomendado)

| `woocommerce_import_TODOS.csv` | **Todos os produtos** (importar no WooCommerce) |

```bash

# Duplo clique ou execute:| `AQUARISMO.csv`, `PET.csv`, etc. | Arquivos por categoria |```bash

processarEstoque-v4.1.bat

```| `metadata_v4.json` | Estatísticas completas do processamento |



### Node.js| `log_execucao_v4_[data].json` | Log detalhado (auditoria) |# Duplo clique ou execute:- `woocommerce_import_TODOS.csv` - All products combined



```bash| `ultimo_processamento_v4.json` | Resumo do último processamento |

node processador-estoque-v4.1.js

```verLogs.bat- `[Category].csv` - Separate file per category (e.g., Pet.csv, Aquarismo.csv)



### Visualizar Logs---



```bash```- `metadata_v4.json` - Processing statistics and metrics

# Duplo clique ou execute:

verLogs.bat## 🏷️ Marcas Suportadas (162)

```

- `log_execucao_v4_[timestamp].json` - Detailed execution log

---

### Pet Food

## ⚙️ Configuração

Royal Canin, Premier, Golden, Farmina, Pedigree, Whiskas, Special Dog, Special Cat, Guabi, Equilibrio, Magnus, Otal, Fórmula Natural, N&D, Gran Plus, Biofresh, PremieR Pet, Sabor & Vida...## ⚙️ Configuração- `ultimo_processamento_v4.json` - Latest processing summary

### config.json - Opções Principais



```json

{### Veterinária

  "arquivos": {

    "entrada": "athos.csv",NexGard, Bravecto, Frontline, Drontal, Revolution, Advocate, Seresto, Heartgard, Simparic, Comfortis...

    "pastaSaida": "saida_estoque"

  },### config.json - Opções Principais## Supported Brands

  "processamento": {

    "precoMinimo": 0.01,### Aquarismo

    "estoqueMinimo": 0,

    "incluirProdutosSemEstoque": trueAlcon, Tetra, Sera, API, Seachem, Labcon, Azoo, Ocean Tech, Tropical...

  },

  "woocommerce": {

    "publicarAutomaticamente": false,

    "permitirAvaliacoes": true,### Piscina```json### Pet Food

    "visibilidadeCatalogo": "visible"

  },Genco, Hidroall, HTH, Barrilha...

  "saida": {

    "criarArquivoGeral": true,{Royal Canin, Premier, Golden, Farmina, Pedigree, Whiskas, Special Dog, Special Cat, Luck Dog, Luck Cat, Guabi, Equilibrio, and more

    "criarArquivosPorCategoria": true,

    "incluirMetadata": true,### Cutelaria

    "formatoData": true

  }Tramontina, Corneta, Zebu, Guepardo...  "arquivos": {

}

```



### Opções Detalhadas### Pesca    "entrada": "athos.csv",### Veterinary



| Campo | Tipo | Padrão | Descrição |Marine Sports, Maruri, Saint, Shimano, Daiwa, Abu Garcia...

|-------|------|--------|-----------|

| `precoMinimo` | number | 0.01 | Preço mínimo para validação |    "pastaSaida": "saida_estoque"NexGard, Bravecto, Frontline, Drontal, Revolution, Advocate, Seresto, Heartgard

| `estoqueMinimo` | number | 0 | Estoque mínimo necessário |

| `incluirProdutosSemEstoque` | boolean | true | Incluir produtos com estoque zero |### Insumos

| `publicarAutomaticamente` | boolean | false | Publicar produtos automaticamente |

| `formatoData` | boolean | true | Adicionar timestamp aos arquivos |Forth, Dimy, Vitaplan, Tecnutri, Nutriplan...  },



---



## 📊 Resultado**Ver lista completa:** [CONTRIBUTING.md](CONTRIBUTING.md#adicionar-nova-marca) - Seção "Adicionar Nova Marca"  "processamento": {### Aquarium



### Arquivos Gerados



```---    "precoMinimo": 0.01,Alcon, Tetra, Sera, Tropical, Ocean Tech, Sarlo, Atman, Aquatech

saida_estoque/

├── woocommerce_import_TODOS_2025-10-16T15-30-00.csv  # Todos produtos

├── PET_2025-10-16T15-30-00.csv                       # Por categoria

├── AQUARISMO_2025-10-16T15-30-00.csv                 # Por categoria## 📖 Documentação    "estoqueMinimo": 0,

├── ...

├── metadata.json                                      # Estatísticas

├── ultimo_processamento.json                          # Log atual

└── log_execucao_2025-10-16T15-30-00.json            # Log completo### 📚 Guias Disponíveis    "incluirProdutosSemEstoque": true### Pool

```



### Exemplo de Relatório

| Documento | Conteúdo |  },Genco, Hidroazul, Bel Gard, HTH, Barranets

```

📊 RELATÓRIO FINAL - VERSÃO 4.1.0|-----------|----------|

==================================================

⏱️  Tempo de processamento: 0.51s| [CHANGELOG.md](CHANGELOG.md) | Histórico de versões e novidades |  "woocommerce": {

📄 Linhas processadas: 3.925

✅ Produtos válidos: 3.901| [CONTRIBUTING.md](CONTRIBUTING.md) | Como contribuir e adicionar marcas |

❌ Produtos inválidos: 24

📦 Produtos sem estoque: 1.456| [LICENSE](LICENSE) | Licença MIT (uso livre) |    "publicarAutomaticamente": false,### Tools & Fishing

🏷️  Total de categorias: 13



🆕 DETECÇÃO INTELIGENTE:

   🏷️  Produtos com MARCA detectada: 2.847 (73.0%)---    "permitirAvaliacoes": true,Tramontina, Marine Sports, Maruri, Daiwa, Shimano, Nautika

   ⚖️  Produtos com PESO detectado: 1.923 (49.3%)

   🗃️  Banco de dados: 160 marcas



🏆 Top 5 Marcas Mais Encontradas:## 🐛 Problemas Comuns    "visibilidadeCatalogo": "visible"

   1. Royal Canin: 456 produtos

   2. Alcon: 389 produtos

   3. Golden: 234 produtos

   4. Premier: 189 produtos### 1. Erro "Arquivo não encontrado"  },## CSV Format

   5. Tetra: 156 produtos

``````bash



---❌ Erro: Arquivo 'athos.csv' não encontrado!  "saida": {



## 🏷️ Marcas Suportadas```



O sistema reconhece **160+ marcas** automaticamente, incluindo:**Solução:** Verifique se o arquivo CSV está na pasta raiz ou configure o caminho correto em `config.json`.    "criarArquivoGeral": true,Output files follow WooCommerce Product CSV Import format with the following fields:



**Pet:** Royal Canin, Premier, Golden, Farmina, Pedigree, Whiskas, Special Dog, Special Cat, Guabi, Equilibrio, Magnus, Otal, Fórmula Natural, N&D, Gran Plus, Biofresh, PremieR Pet, Sabor & Vida



**Veterinária:** NexGard, Bravecto, Frontline, Drontal, Revolution, Advocate, Seresto, Heartgard, Simparic, Comfortis### 2. Produtos sem marca detectada    "criarArquivosPorCategoria": true,



**Aquarismo:** Alcon, Tetra, Sera, API, Seachem, Labcon, Azoo, Ocean Tech, Tropical, Sarlo, Atman, Aquatech```bash



**Piscina:** Genco, Hidroazul, HTH, Bel Gard, Barranets⚠️ Aviso: 50 produtos sem marca detectada    "incluirMetadata": true,- SKU



**Ferramentas:** Tramontina, Vonder, Western, Corneta, Zebu, Guepardo```



**Pesca:** Marine Sports, Maruri, Saint, Shimano, Daiwa, Abu Garcia, Nautika**Solução:** Adicione as marcas faltantes em `processador-estoque-v4.1.js` (linha ~50). Veja [CONTRIBUTING.md](CONTRIBUTING.md#adicionar-nova-marca).    "formatoData": true- Name



**Insumos:** Forth, Dimy, Vitaplan, Tecnutri, Nutriplan



**Ver lista completa:** [CONTRIBUTING.md](CONTRIBUTING.md#adicionar-nova-marca)### 3. Peso não extraído  }- Published status



---```bash



## 🐛 Problemas Comunsℹ️ Info: Peso não encontrado em "Produto XYZ"}- Stock information



### 1. Erro "Arquivo não encontrado"```



```bash**Solução:** O peso está em formato não reconhecido. Formatos aceitos: `15kg`, `500g`, `300ml`, `1l`, `1.5kg`, `750ml`.```- Pricing

❌ Erro: Arquivo 'athos.csv' não encontrado!

```



**Solução:** Verifique se o arquivo CSV está na pasta raiz ou configure o caminho correto em `config.json`.---- Categories and Tags



### 2. Produtos sem marca detectada



```bash## 🤝 Contribuir### Opções Detalhadas- Product descriptions

⚠️ Aviso: 50 produtos sem marca detectada

```



**Solução:** Adicione as marcas faltantes em `processador-estoque-v4.1.js`. Veja [CONTRIBUTING.md](CONTRIBUTING.md#adicionar-nova-marca).Quer adicionar marcas ou melhorar o código?- Weight



### 3. Peso não extraído



```bash1. **Fork** este repositório| Campo | Tipo | Padrão | Descrição |- Custom meta fields (brand, original name, cost, margin)

ℹ️ Info: Peso não encontrado em "Produto XYZ"

```2. **Adicione** sua marca ou melhoria



**Solução:** O peso está em formato não reconhecido. Formatos aceitos: `15kg`, `500g`, `300ml`, `1l`, `1.5kg`, `750ml`.3. **Teste** com seus dados|-------|------|--------|-----------|



---4. **Abra** um Pull Request



## 🤝 Contribuir| `precoMinimo` | number | 0.01 | Preço mínimo para validação |## Processing Statistics



Quer adicionar marcas ou melhorar o código?Veja o guia completo em [CONTRIBUTING.md](CONTRIBUTING.md).



1. **Fork** este repositório| `estoqueMinimo` | number | 0 | Estoque mínimo necessário |

2. **Adicione** sua marca ou melhoria

3. **Teste** com seus dados---

4. **Abra** um Pull Request

| `incluirProdutosSemEstoque` | boolean | true | Incluir produtos com estoque zero |Example output:

Veja o guia completo em [CONTRIBUTING.md](CONTRIBUTING.md).

## 📊 Estatísticas do Projeto

---

| `publicarAutomaticamente` | boolean | false | Publicar produtos automaticamente |

## 📖 Documentação

- 💻 **Linguagem:** JavaScript (Node.js)

### 📚 Guias Disponíveis

- 📦 **Dependências:** 2 (csv-parser, csv-writer)| `formatoData` | boolean | true | Adicionar timestamp aos arquivos |```

| Documento | Conteúdo |

|-----------|----------|- 🏷️ **Marcas:** 162 no banco de dados

| [CHANGELOG.md](CHANGELOG.md) | Histórico de versões e novidades |

| [CONTRIBUTING.md](CONTRIBUTING.md) | Como contribuir e adicionar marcas |- ⚡ **Performance:** ~7.500 produtos/segundoProcessing time: 0.52s

| [LICENSE](LICENSE) | Licença MIT (uso livre) |

- 📝 **Linhas de código:** ~850

### Estrutura do Projeto

- 🧪 **Testado com:** 4.000+ produtos reais## 📊 ResultadoLines processed: 3933

```

AquaFlora-Estoque/

├── processador-estoque-v4.1.js    # 🎯 Processador principal

├── processarEstoque-v4.1.bat      # Windows launcher---Valid products: 3925

├── config.json                     # Configurações

├── config.example.json             # Template de config

├── package.json                    # Dependências Node.js

├── athos.csv                       # 📥 Arquivo de entrada## 📝 Licença### Arquivos GeradosBrand detected: 401 (10.2%)

├── saida_estoque/                  # 📤 Arquivos gerados

├── visualizar-logs.js              # Visualizador de logs

├── verLogs.bat                     # Launcher logs

├── README.md                       # DocumentaçãoEste projeto está sob a licença **MIT**. Veja [LICENSE](LICENSE) para mais detalhes.Weight detected: 1191 (30.3%)

└── LICENSE                         # Licença MIT

```



### Campos CSV de Saída (WooCommerce)---```



| Campo | Descrição | Exemplo |

|-------|-----------|---------|

| SKU | Código único do produto | `12345` |## 🌟 Apoie o Projetosaida_estoque/Top 5 Brands:

| Name | Nome formatado | `Ração Golden Adulto 15Kg` |

| Published | Publicado? | `1` ou `0` |

| Stock | Quantidade em estoque | `150` |

| Regular price | Preço de venda | `89.90` |Se este projeto te ajudou, considere:├── woocommerce_import_TODOS_2025-10-16T15-30-00.csv  # Todos produtos1. Golden: 61 products

| Weight (kg) | Peso detectado | `15.000` |

| Categories | Categoria formatada | `Pet` |- ⭐ Dar uma **estrela** no GitHub

| Tags | Tags automáticas | `Pet, Golden, Premium` |

| Attribute 1 name | Nome do atributo | `Marca` |- 🐛 Reportar **bugs** ou sugerir melhorias├── PET_2025-10-16T15-30-00.csv                       # Por categoria2. Special Dog: 45 products

| Attribute 1 value(s) | Valor do atributo | `Golden` |

| Meta: _marca | Marca detectada | `Golden` |- 🤝 Contribuir com **código** ou **marcas**

| Meta: _custo | Custo do produto | `65.00` |

| Meta: _margem | Margem % | `38.31` |- 📢 Compartilhar com quem precisa!├── AQUARISMO_2025-10-16T15-30-00.csv                 # Por categoria3. Premier: 29 products



---



## 📊 Estatísticas do Projeto---├── ...4. Special Cat: 28 products



- 💻 **Linguagem:** JavaScript (Node.js)

- 📦 **Dependências:** 2 (csv-parser, csv-writer)

- 🏷️ **Marcas:** 160+ no banco de dados**Desenvolvido com ❤️ para facilitar a gestão de estoque no WooCommerce**├── metadata.json                                      # Estatísticas5. Sarlo: 22 products

- ⚡ **Performance:** ~7.500 produtos/segundo

- 📝 **Linhas de código:** ~850

- 🧪 **Testado com:** 4.000+ produtos reais

**Versão:** 4.1.0 | **Status:** Produção | **Node:** ≥18.0.0├── ultimo_processamento.json                          # Log atual```

---



## 📝 Licença└── log_execucao_2025-10-16T15-30-00.json            # Log completo



Este projeto está sob a licença **MIT**. Veja [LICENSE](LICENSE) para mais detalhes.```## Log Visualization



Copyright (c) 2025 AquaFlora Agroshop



---### Exemplo de RelatórioView detailed processing logs:



## 🆘 Suporte



**Problemas?** Abra uma issue no GitHub  ``````bash

**Dúvidas?** Consulte a documentação completa  

**Contribuir?** Veja [CONTRIBUTING.md](CONTRIBUTING.md)📊 RELATÓRIO FINAL - VERSÃO 4.1.0node visualizar-logs.js



---==================================================```



**Desenvolvido com ❤️ para facilitar a gestão de estoque no WooCommerce**⏱️  Tempo de processamento: 0.51s



**Versão:** 4.1.0 | **Status:** ✅ Produção | **Node:** ≥18.0.0  📄 Linhas processadas: 5.234## Version History

**Última atualização:** 16/10/2025  

**Autor:** AquaFlora Agroshop Development Team✅ Produtos válidos: 3.925


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
