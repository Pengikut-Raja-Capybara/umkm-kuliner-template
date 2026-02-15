# 📦 Release Checklist

Checklist untuk memastikan release berjalan lancar.

## Pre-Release

### Code Quality
- [ ] Semua fitur sudah complete dan tested
- [ ] Tidak ada console.log() atau debug code
- [ ] Lint passing: `bun run lint`
- [ ] Build successful: `bun run build`
- [ ] Preview production build: `bun run preview`
- [ ] Test di multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test responsive di mobile, tablet, desktop

### Documentation
- [ ] README.md updated
- [ ] CHANGELOG.md updated dengan version baru
- [ ] DEPLOYMENT.md accurate
- [ ] Inline code comments clear
- [ ] Type definitions complete

### Version
- [ ] package.json version updated
- [ ] CHANGELOG.md version entry created
- [ ] Release notes prepared (.github/RELEASE.md)

### Testing
- [ ] All layouts (A-E) working
- [ ] All themes (19 themes) switching correctly
- [ ] WhatsApp links working
- [ ] Google Maps embed working
- [ ] Image loading correct (local & production)
- [ ] Animations smooth
- [ ] No broken links
- [ ] SEO tags present

## Release

### Git
- [ ] All changes committed
- [ ] No uncommitted changes: `git status`
- [ ] On main/master branch
- [ ] Pulled latest changes: `git pull`

### Tag & Push
- [ ] Create git tag: `git tag -a v0.0.1 -m "Release v0.0.1"`
- [ ] Push tag: `git push origin v0.0.1`
- [ ] Verify tag on GitHub

### GitHub Release
- [ ] Go to GitHub Releases page
- [ ] Click "Draft a new release"
- [ ] Select tag: v0.0.1
- [ ] Title: "Release v0.0.1 - Initial Release"
- [ ] Copy content from .github/RELEASE.md
- [ ] Attach assets if any (optional)
- [ ] Publish release

### Deployment
- [ ] GitHub Actions workflow passed
- [ ] GitHub Pages deployed successfully
- [ ] Live site accessible and working
- [ ] All images loading on production
- [ ] Test all features on live site

## Post-Release

### Verification
- [ ] Check live site: https://username.github.io/repo-name/
- [ ] Test WhatsApp links on mobile
- [ ] Test Google Maps on production
- [ ] Verify all themes work
- [ ] Check responsive layout
- [ ] Test performance (PageSpeed Insights)

### Communication
- [ ] Update README with latest version badge
- [ ] Create announcement (if applicable)
- [ ] Notify users/community
- [ ] Share on social media (optional)

### Monitoring
- [ ] Monitor GitHub Issues for bug reports
- [ ] Monitor GitHub Discussions for questions
- [ ] Check analytics (if integrated)
- [ ] Collect user feedback

### Cleanup
- [ ] Delete old branches (if any)
- [ ] Archive old releases (if needed)
- [ ] Update project board
- [ ] Plan next version features

---

## Quick Commands

### Mac/Linux
```bash
# Run release script
chmod +x scripts/release.sh
./scripts/release.sh
```

### Windows (PowerShell)
```powershell
# Run release script
.\scripts\release.ps1
```

### Manual Release
```bash
# 1. Update version
# Edit package.json version

# 2. Update CHANGELOG.md
# Add new version entry

# 3. Commit changes
git add .
git commit -m "chore: bump version to v0.0.1"

# 4. Create tag
git tag -a v0.0.1 -m "Release v0.0.1 - Initial Release"

# 5. Push
git push origin main
git push origin v0.0.1

# 6. Create GitHub Release
# Via GitHub UI or CLI:
gh release create v0.0.1 --title "Release v0.0.1" --notes-file .github/RELEASE.md
```

---

**Remember:** A good release is a tested release! 🚀
