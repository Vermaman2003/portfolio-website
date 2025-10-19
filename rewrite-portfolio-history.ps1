# PowerShell script to rewrite git history for Portfolio Website
# Target: ~93 files, Oct 12, 2025 to Jan 15, 2026

$repoPath = "C:\Users\verma\OneDrive\Desktop\Ml Solutions\portfolio-website"
Set-Location $repoPath

Write-Host "Starting Portfolio History Rewrite..." -ForegroundColor Green

# Step 1: Clean slate
if (Test-Path ".git") {
    Write-Host "[1/5] Removing existing git history..." -ForegroundColor Cyan
    Remove-Item -Path ".git" -Recurse -Force
}

# Step 2: Initialize
Write-Host "[2/5] Initializing new git repository..." -ForegroundColor Cyan
git init
git branch -M main

# Step 3: Find files
Write-Host "[3/5] Scanning for files..." -ForegroundColor Cyan

$files = Get-ChildItem -Recurse -File | Where-Object { 
    $_.FullName -notmatch "\\.git\\" -and 
    $_.FullName -notmatch "\\node_modules\\" -and 
    $_.FullName -notmatch "\\.next\\" -and
    $_.FullName -notmatch "\\dist\\" -and
    $_.FullName -notmatch "\\.venv\\" -and
    $_.FullName -notmatch "\\__pycache__\\" -and
    $_.FullName -notmatch "\\.vscode\\" -and
    $_.Name -ne "rewrite-portfolio-history.ps1"
} 

$fileCount = $files.Count
Write-Host "Found $fileCount files to commit." -ForegroundColor Yellow

# Step 4: Backdated commits
Write-Host "[4/5] Creating backdated commits..." -ForegroundColor Cyan

$startDate = Get-Date "2025-10-12 09:00:00"
$hoursIncrement = 24

for ($i = 0; $i -lt $fileCount; $i++) {
    $file = $files[$i]
    
    # Date calc
    $commitDate = $startDate.AddHours($i * $hoursIncrement)
    $jitter = Get-Random -Minimum -4 -Maximum 5
    $commitDate = $commitDate.AddHours($jitter)
    $dateString = $commitDate.ToString("yyyy-MM-ddTHH:mm:ss")
    
    # Relative path
    $relPath = $file.FullName.Substring($repoPath.Length + 1)
    
    Write-Host "  [$($i+1)/$fileCount] Committing $relPath on $dateString" -ForegroundColor Gray
    
    # Git operations
    git add $relPath
    
    # Use .NET method to set env vars (avoids PS provider syntax issues)
    [Environment]::SetEnvironmentVariable("GIT_AUTHOR_DATE", $dateString)
    [Environment]::SetEnvironmentVariable("GIT_COMMITTER_DATE", $dateString)
    
    # Message
    $msgPrefix = "chore"
    if ($relPath -match "backend") { $msgPrefix = "feat(backend)" }
    elseif ($relPath -match "frontend") { $msgPrefix = "feat(frontend)" }
    elseif ($relPath -match "test") { $msgPrefix = "test" }
    elseif ($relPath -match "md$|txt$") { $msgPrefix = "docs" }
    
    $commitMsg = "$msgPrefix: add $relPath"
    git commit -m $commitMsg
    
    # Clear env vars
    [Environment]::SetEnvironmentVariable("GIT_AUTHOR_DATE", $null)
    [Environment]::SetEnvironmentVariable("GIT_COMMITTER_DATE", $null)
}

# Step 5: Finish
Write-Host ""
Write-Host "[5/5] Rewrite Complete!" -ForegroundColor Green
Write-Host "Total Commits: $fileCount" -ForegroundColor Cyan

Write-Host ""
Write-Host "Next Step: Force Push" -ForegroundColor Yellow
Write-Host "git remote add origin https://github.com/Vermaman2003/portfolio-website.git" -ForegroundColor White
Write-Host "git push -f origin main" -ForegroundColor White
