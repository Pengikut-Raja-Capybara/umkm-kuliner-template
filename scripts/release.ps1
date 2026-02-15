# PowerShell Release Script for UMKM Kuliner Template
# Version: 0.0.1

$VERSION = "v0.0.1"
$RELEASE_DATE = "2026-02-15"

Write-Host "🚀 Preparing Release $VERSION" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# 1. Check if we're on main branch
$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
    Write-Host "⚠️  Warning: You're not on main branch (current: $currentBranch)" -ForegroundColor Yellow
    $continue = Read-Host "Continue anyway? (y/N)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        exit 1
    }
}

# 2. Check for uncommitted changes
$gitStatus = git status -s
if ($gitStatus) {
    Write-Host "❌ Error: You have uncommitted changes" -ForegroundColor Red
    Write-Host "Please commit or stash your changes first" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Git status clean" -ForegroundColor Green
Write-Host ""

# 3. Run lint
Write-Host "🔍 Running lint..." -ForegroundColor Cyan
bun run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Lint failed. Continue anyway?" -ForegroundColor Yellow
    $continue = Read-Host "(y/N)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        exit 1
    }
}
Write-Host "✅ Lint passed" -ForegroundColor Green
Write-Host ""

# 4. Build
Write-Host "🔨 Building project..." -ForegroundColor Cyan
bun run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host ""

# 5. Create git tag
Write-Host "🏷️  Creating git tag $VERSION..." -ForegroundColor Cyan

$tagMessage = @"
Release $VERSION - Initial Release

🎉 UMKM Kuliner Template v0.0.1

## Highlights
- 5 Layout configurations
- 19 Professional theme colors
- Modern UI with animations
- Fully responsive design
- Production ready

See CHANGELOG.md for full details.

Release Date: $RELEASE_DATE
"@

git tag -a "$VERSION" -m "$tagMessage"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Tag created: $VERSION" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to create tag" -ForegroundColor Red
    exit 1
}
Write-Host ""

# 6. Push tag
Write-Host "📤 Pushing tag to remote..." -ForegroundColor Cyan
$pushTag = Read-Host "Push tag to remote? (y/N)"
if ($pushTag -eq "y" -or $pushTag -eq "Y") {
    git push origin "$VERSION"
    Write-Host "✅ Tag pushed to remote" -ForegroundColor Green
} else {
    Write-Host "⏭️  Skipped pushing tag" -ForegroundColor Yellow
    Write-Host "To push manually: git push origin $VERSION"
}
Write-Host ""

# 7. Summary
Write-Host "================================" -ForegroundColor Cyan
Write-Host "✨ Release $VERSION prepared!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to GitHub repository"
Write-Host "2. Navigate to 'Releases' tab"
Write-Host "3. Click 'Draft a new release'"
Write-Host "4. Select tag: $VERSION"
Write-Host "5. Copy content from .github/RELEASE.md"
Write-Host "6. Publish release"
Write-Host ""
Write-Host "Or use GitHub CLI:" -ForegroundColor Yellow
Write-Host "gh release create $VERSION --title `"Release $VERSION`" --notes-file .github/RELEASE.md"
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "🎉 Done!" -ForegroundColor Green
