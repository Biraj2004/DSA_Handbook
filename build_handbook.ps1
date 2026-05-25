# build_handbook.ps1 - Automated XeLaTeX build utility for DSA Handbook v2
$ErrorActionPreference = "Stop"

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "   DSA HANDBOOK BUILD UTILITY (XeLaTeX)   " -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

# 1. Resolve compiler path
if (-not (Get-Command xelatex -ErrorAction SilentlyContinue)) {
    $tinytexPath = "$env:APPDATA\TinyTeX\bin\windows"
    if (Test-Path $tinytexPath) {
        $env:PATH += ";$tinytexPath"
        Write-Host "[OK] Added TinyTeX from User AppData to current session PATH." -ForegroundColor Yellow
    } else {
        Write-Host "[ERROR] XeLaTeX compiler not found in system PATH." -ForegroundColor Red
        Write-Host "        Please install TinyTeX (recommended) or TeX Live." -ForegroundColor Red
        Exit 1
    }
} else {
    Write-Host "[OK] XeLaTeX compiler found." -ForegroundColor Green
}

# 2. Verify files and folders
$v2Dir = Join-Path $PSScriptRoot "v2"
$texFile = "DSA_Handbook_CH_1-11.tex"
$pdfFile = "DSA_Handbook_CH_1-11.pdf"

if (-not (Test-Path (Join-Path $v2Dir $texFile))) {
    Write-Host "[ERROR] TeX source file not found at: $v2Dir\$texFile" -ForegroundColor Red
    Exit 1
}

# Change directory to v2/ to perform compilation
Push-Location $v2Dir

try {
    Write-Host "[1/3] Running first XeLaTeX compilation pass..." -ForegroundColor Green
    $process1 = Start-Process xelatex -ArgumentList "-interaction=nonstopmode -halt-on-error $texFile" -NoNewWindow -PassThru -Wait
    if ($process1.ExitCode -ne 0) {
        Write-Host "[ERROR] Compilation failed on first pass. Check LaTeX output or log file." -ForegroundColor Red
        Exit 1
    }

    Write-Host "[2/3] Running second XeLaTeX compilation pass for references..." -ForegroundColor Green
    $process2 = Start-Process xelatex -ArgumentList "-interaction=nonstopmode -halt-on-error $texFile" -NoNewWindow -PassThru -Wait
    if ($process2.ExitCode -ne 0) {
        Write-Host "[ERROR] Compilation failed on second pass." -ForegroundColor Red
        Exit 1
    }

    # 3. Clean up intermediate auxiliary files
    Write-Host "[3/3] Cleaning up temporary compilation artifacts..." -ForegroundColor Green
    $auxExtensions = @("*.aux", "*.log", "*.out", "*.toc", "*.idx", "*.ilg", "*.ind", "*.fdb_latexmk", "*.fls")
    foreach ($ext in $auxExtensions) {
        Remove-Item $ext -ErrorAction SilentlyContinue
    }

    Write-Host "=========================================" -ForegroundColor Cyan
    Write-Host "   Build completed successfully!          " -ForegroundColor Green
    Write-Host "   Output: v2/$pdfFile" -ForegroundColor Green
    Write-Host "=========================================" -ForegroundColor Cyan
}
catch {
    Write-Host "[ERROR] Exception occurred during compiler execution: $_" -ForegroundColor Red
    Exit 1
}
finally {
    # Always restore original working directory
    Pop-Location
}
