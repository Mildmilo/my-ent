#!/bin/bash
# My-ENT Git Push Helper
# Usage: bash git-push.sh "Your commit message"
# Or just: bash git-push.sh (uses default message)

cd /Users/catherinebanks/myent-ai/my-ent

MSG="${1:-Update site}"

echo "Staging all changes..."
git add -A

STATUS=$(git status --porcelain)
if [ -z "$STATUS" ]; then
  echo "Nothing to commit — working tree clean."
  exit 0
fi

echo "Committing: $MSG"
git commit -m "$MSG"

echo "Pushing to GitHub..."
git push origin main

echo "Done."
