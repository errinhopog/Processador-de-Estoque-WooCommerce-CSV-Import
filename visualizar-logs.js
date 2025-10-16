const fs = require('fs');
const path = require('path');

class VisualizadorLogs {
  constructor() {
    this.pastaSaida = 'saida_estoque';
  }

  // Função principal
  exibirLogs() {
    console.log('📋 VISUALIZADOR DE LOGS - ÚLTIMA EXECUÇÃO\n');
    
    try {
      this.exibirUltimoProcessamento();
      this.listarLogsDisponiveis();
    } catch (error) {
      console.error('❌ Erro ao carregar logs:', error.message);
    }
  }

  // Exibe o último processamento
  exibirUltimoProcessamento() {
    const arquivoLog = path.join(this.pastaSaida, 'ultimo_processamento.json');
    
    if (!fs.existsSync(arquivoLog)) {
      console.log('⚠️  Nenhum log de processamento encontrado.');
      console.log('   Execute o processador v3 primeiro.\n');
      return;
    }

    const log = JSON.parse(fs.readFileSync(arquivoLog, 'utf8'));
    
    console.log('🕐 ÚLTIMO PROCESSAMENTO');
    console.log('='.repeat(50));
    console.log(`📅 Data/Hora: ${log.execucao.dataHoraBrasil}`);
    console.log(`⏱️  Duração: ${log.execucao.duracao}`);
    console.log(`📊 Versão: ${log.execucao.versao}`);
    
    console.log('\n📈 RESUMO ESTATÍSTICO:');
    console.log(`   📄 Linhas processadas: ${log.resumo.totalLinhasProcessadas.toLocaleString()}`);
    console.log(`   ✅ Produtos válidos: ${log.resumo.produtosValidos.toLocaleString()}`);
    console.log(`   ❌ Produtos inválidos: ${log.resumo.produtosInvalidos}`);
    console.log(`   📦 Sem estoque: ${log.resumo.produtosSemEstoque.toLocaleString()}`);
    console.log(`   🏷️  Categorias: ${log.resumo.totalCategorias}`);
    console.log(`   ⚠️  Erros: ${log.resumo.totalErros}`);

    console.log('\n🏷️  CATEGORIAS PROCESSADAS:');
    log.categorias
      .sort((a, b) => b.quantidade - a.quantidade)
      .forEach(cat => {
        console.log(`   ${cat.nome}: ${cat.quantidade} produtos (R$ ${cat.valorTotal}) | Com estoque: ${cat.produtosComEstoque}`);
      });

    console.log('\n💰 TOP 5 PRODUTOS MAIS CAROS:');
    log.amostrasProcessamento.produtos5MaisCaros.forEach((produto, index) => {
      console.log(`   ${index + 1}. ${produto.nome} - R$ ${produto.preco} (${produto.categoria}) - Estoque: ${produto.estoque}`);
    });

    console.log('\n📦 TOP 5 PRODUTOS COM MAIOR ESTOQUE:');
    log.amostrasProcessamento.produtosMaiorEstoque.forEach((produto, index) => {
      console.log(`   ${index + 1}. ${produto.nome} - ${produto.estoque} unidades (${produto.categoria}) - R$ ${produto.preco}`);
    });

    console.log('\n📁 ARQUIVOS GERADOS:');
    log.arquivosGerados.forEach(arquivo => {
      const tamanhoMB = (arquivo.tamanho / 1024 / 1024).toFixed(2);
      console.log(`   ✅ ${arquivo.arquivo} (${tamanhoMB} MB) - ${arquivo.produtos}`);
    });

    if (log.erros && log.erros.length > 0) {
      console.log('\n⚠️  ERROS ENCONTRADOS:');
      log.erros.slice(0, 5).forEach(erro => {
        console.log(`   Linha ${erro.linha}: ${erro.erro}`);
      });
      if (log.erros.length > 5) {
        console.log(`   ... e mais ${log.erros.length - 5} erros`);
      }
    }

    console.log('\n🎯 CONFIGURAÇÃO USADA:');
    console.log(`   Incluir sem estoque: ${log.configuracao.processamento.incluirProdutosSemEstoque ? 'Sim' : 'Não'}`);
    console.log(`   Preço mínimo: R$ ${log.configuracao.processamento.precoMinimo}`);
    console.log(`   Validar SKU: ${log.configuracao.validacoes.skuObrigatorio ? 'Sim' : 'Não'}`);
    console.log(`   Publicar automaticamente: ${log.configuracao.woocommerce.publicarAutomaticamente ? 'Sim' : 'Não'}`);
  }

  // Lista todos os logs disponíveis
  listarLogsDisponiveis() {
    console.log('\n📂 LOGS DISPONÍVEIS:');
    console.log('='.repeat(30));
    
    if (!fs.existsSync(this.pastaSaida)) {
      console.log('   Pasta de saída não encontrada');
      return;
    }

    const arquivos = fs.readdirSync(this.pastaSaida)
      .filter(arquivo => arquivo.startsWith('log_execucao_') && arquivo.endsWith('.json'))
      .sort()
      .reverse(); // Mais recentes primeiro

    if (arquivos.length === 0) {
      console.log('   Nenhum log de execução encontrado');
      return;
    }

    console.log(`   📋 ${arquivos.length} execuções registradas:`);
    arquivos.slice(0, 10).forEach((arquivo, index) => {
      const stats = fs.statSync(path.join(this.pastaSaida, arquivo));
      const data = stats.mtime.toLocaleString('pt-BR');
      console.log(`   ${index + 1}. ${arquivo} (${data})`);
    });

    if (arquivos.length > 10) {
      console.log(`   ... e mais ${arquivos.length - 10} logs antigos`);
    }
  }

  // Exibe log específico
  exibirLogEspecifico(nomeArquivo) {
    const caminhoArquivo = path.join(this.pastaSaida, nomeArquivo);
    
    if (!fs.existsSync(caminhoArquivo)) {
      console.log(`❌ Arquivo não encontrado: ${nomeArquivo}`);
      return;
    }

    const log = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf8'));
    
    console.log(`📋 LOG ESPECÍFICO: ${nomeArquivo}\n`);
    this.exibirDetalhesLog(log);
  }

  // Exibe logs resumidos dos últimos dias
  exibirHistorico(dias = 7) {
    console.log(`\n📊 HISTÓRICO DOS ÚLTIMOS ${dias} DIAS:`);
    console.log('='.repeat(40));
    
    const agora = new Date();
    const limiteData = new Date(agora.getTime() - (dias * 24 * 60 * 60 * 1000));
    
    const arquivosRecentes = fs.readdirSync(this.pastaSaida)
      .filter(arquivo => arquivo.startsWith('log_execucao_') && arquivo.endsWith('.json'))
      .map(arquivo => {
        const stats = fs.statSync(path.join(this.pastaSaida, arquivo));
        return { arquivo, data: stats.mtime };
      })
      .filter(item => item.data >= limiteData)
      .sort((a, b) => b.data - a.data);

    if (arquivosRecentes.length === 0) {
      console.log(`   Nenhuma execução nos últimos ${dias} dias`);
      return;
    }

    console.log(`   📈 ${arquivosRecentes.length} execuções encontradas:\n`);
    
    arquivosRecentes.forEach((item, index) => {
      try {
        const log = JSON.parse(fs.readFileSync(path.join(this.pastaSaida, item.arquivo), 'utf8'));
        console.log(`   ${index + 1}. ${item.data.toLocaleString('pt-BR')}`);
        console.log(`      ✅ ${log.resumo.produtosValidos} produtos válidos`);
        console.log(`      ❌ ${log.resumo.produtosInvalidos} inválidos`);
        console.log(`      ⏱️  ${log.execucao.duracao}`);
        console.log('');
      } catch (error) {
        console.log(`   ${index + 1}. ${item.data.toLocaleString('pt-BR')} - Erro ao ler log`);
      }
    });
  }

  // Compara duas execuções
  compararExecucoes(arquivo1, arquivo2) {
    console.log('🔍 COMPARAÇÃO DE EXECUÇÕES\n');
    
    try {
      const log1 = JSON.parse(fs.readFileSync(path.join(this.pastaSaida, arquivo1), 'utf8'));
      const log2 = JSON.parse(fs.readFileSync(path.join(this.pastaSaida, arquivo2), 'utf8'));
      
      console.log(`📊 COMPARAÇÃO:`);
      console.log(`   ${arquivo1} vs ${arquivo2}\n`);
      
      console.log('📈 ESTATÍSTICAS:');
      console.log(`   Produtos válidos: ${log1.resumo.produtosValidos} → ${log2.resumo.produtosValidos} (${log2.resumo.produtosValidos - log1.resumo.produtosValidos >= 0 ? '+' : ''}${log2.resumo.produtosValidos - log1.resumo.produtosValidos})`);
      console.log(`   Produtos inválidos: ${log1.resumo.produtosInvalidos} → ${log2.resumo.produtosInvalidos} (${log2.resumo.produtosInvalidos - log1.resumo.produtosInvalidos >= 0 ? '+' : ''}${log2.resumo.produtosInvalidos - log1.resumo.produtosInvalidos})`);
      console.log(`   Categorias: ${log1.resumo.totalCategorias} → ${log2.resumo.totalCategorias} (${log2.resumo.totalCategorias - log1.resumo.totalCategorias >= 0 ? '+' : ''}${log2.resumo.totalCategorias - log1.resumo.totalCategorias})`);
      
    } catch (error) {
      console.log(`❌ Erro ao comparar: ${error.message}`);
    }
  }
}

// Execução principal
if (require.main === module) {
  const visualizador = new VisualizadorLogs();
  
  const args = process.argv.slice(2);
  const comando = args[0];
  
  switch (comando) {
    case 'historico':
      const dias = parseInt(args[1]) || 7;
      visualizador.exibirHistorico(dias);
      break;
    case 'arquivo':
      const arquivo = args[1];
      if (arquivo) {
        visualizador.exibirLogEspecifico(arquivo);
      } else {
        console.log('❌ Especifique o nome do arquivo');
      }
      break;
    case 'comparar':
      const arq1 = args[1];
      const arq2 = args[2];
      if (arq1 && arq2) {
        visualizador.compararExecucoes(arq1, arq2);
      } else {
        console.log('❌ Especifique dois arquivos para comparar');
      }
      break;
    default:
      visualizador.exibirLogs();
  }
}

module.exports = VisualizadorLogs;