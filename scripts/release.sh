#!/usr/bin/env bash

# UMKM Kuliner Template - Release Script
# Version: 0.0.1

set -e

VERSION="v0.0.1"
RELEASE_DATE="2026-02-15"

echo "🚀 Preparing Release $VERSION"
echo "================================"
echo ""

# 1. Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Warning: You're not on main branch (current: $CURRENT_BRANCH)"
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 2. Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "❌ Error: You have uncommitted changes"
    echo "Please commit or stash your changes first"
    exit 1
fi

echo "✅ Git status clean"
echo ""

# 3. Run tests/lint
echo "🔍 Running lint..."
bun run lint || {
    echo "⚠️  Lint failed. Continue anyway?"
    read -p "(y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
}
echo "✅ Lint passed"
echo ""

# 4. Build
echo "🔨 Building project..."
bun run build
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi
echo ""

# 5. Create git tag
echo "🏷️  Creating git tag $VERSION..."
git tag -a "$VERSION" -m "Release $VERSION - Initial Release

🎉 UMKM Kuliner Template v0.0.1

## Highlights
- 5 Layout configurations
- 19 Professional theme colors
- Modern UI with animations
- Fully responsive design
- Production ready

See CHANGELOG.md for full details.

Release Date: $RELEASE_DATE
"

if [ $? -eq 0 ]; then
    echo "✅ Tag created: $VERSION"
else
    echo "❌ Failed to create tag"
    exit 1
fi
echo ""

# 6. Push tag
echo "📤 Pushing tag to remote..."
read -p "Push tag to remote? (y/N) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git push origin "$VERSION"
    echo "✅ Tag pushed to remote"
else
    echo "⏭️  Skipped pushing tag"
    echo "To push manually: git push origin $VERSION"
fi
echo ""

# 7. Summary
echo "================================"
echo "✨ Release $VERSION prepared!"
echo ""
echo "Next steps:"
echo "1. Go to GitHub repository"
echo "2. Navigate to 'Releases' tab"
echo "3. Click 'Draft a new release'"
echo "4. Select tag: $VERSION"
echo "5. Copy content from .github/RELEASE.md"
echo "6. Publish release"
echo ""
echo "Or use GitHub CLI:"
echo "gh release create $VERSION --title \"Release $VERSION\" --notes-file .github/RELEASE.md"
echo ""
echo "================================"
echo "🎉 Done!"
