@echo off
chcp 65001 >nul
cls
echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║   🗑️  LIMPAR ARQUIVOS - Processador v4.1.0          ║
echo ╚═══════════════════════════════════════════════════════╝
echo.
echo Este script irá APAGAR todos os arquivos na pasta saida_estoque
echo.
echo ⚠️  ATENÇÃO: Esta ação não pode ser desfeita!
echo.
set /p confirma="Tem certeza que deseja continuar? (S/N): "

if /i "%confirma%" NEQ "S" (
    echo.
    echo ❌ Operação cancelada pelo usuário
    echo.
    pause
    exit /b
)

echo.
echo 🗑️  Limpando arquivos...

if exist "saida_estoque" (
    del /Q "saida_estoque\*.csv" 2>nul
    del /Q "saida_estoque\*.json" 2>nul
    del /Q "saida_estoque\*.txt" 2>nul
    echo ✅ Arquivos removidos com sucesso!
) else (
    echo ℹ️  Pasta saida_estoque não existe (será criada no próximo processamento)
)

echo.
echo ✅ Limpeza concluída!
echo.
echo 📊 Pasta pronta para novo processamento
echo.
pause
