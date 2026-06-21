#!/usr/bin/env sh
set -eu

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REPO_DIR="$(cd "$PROJECT_DIR/.." && pwd)"
PROJECT_GITIGNORE="$PROJECT_DIR/.gitignore"
REPO_GITIGNORE="$REPO_DIR/.gitignore"

append_block_if_missing() {
  file="$1"
  marker="$2"
  block="$3"

  touch "$file"

  if grep -Fq "$marker" "$file"; then
    echo "ok: $file already has $marker"
    return
  fi

  {
    printf '\n%s\n' "$marker"
    printf '%s\n' "$block"
  } >> "$file"

  echo "updated: $file"
}

append_block_if_missing "$PROJECT_GITIGNORE" "# Project ignores" "# Angular / Node
/node_modules
/dist
/.angular/cache
/coverage
/tmp
/out-tsc

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Environment files
.env
.env.*
!.env.example

# OS / editor
.DS_Store
Thumbs.db
.idea/
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json"

append_block_if_missing "$REPO_GITIGNORE" "# Portifolio Angular project ignores" "portifolio/node_modules/
portifolio/dist/
portifolio/.angular/cache/
portifolio/coverage/
portifolio/tmp/
portifolio/out-tsc/
portifolio/.env
portifolio/.env.*
!portifolio/.env.example"
