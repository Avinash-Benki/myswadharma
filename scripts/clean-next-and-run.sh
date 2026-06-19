#!/usr/bin/env sh
#
# Drop Next.js build artifacts and restart cleanly.
# - Removes .next/ (dev + build cache; fixes stale chunk errors like missing *.js)
# - Removes out/ so the next static export is not mixed with old files
#
# Usage:
#   ./scripts/clean-next-and-run.sh        # default: npm run dev
#   ./scripts/clean-next-and-run.sh dev    # same
#   ./scripts/clean-next-and-run.sh build  # npm run build only (refills out/)
#
set -eu

ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

MODE="${1:-dev}"

printf '%s\n' "Cleaning .next/ and out/ in ${ROOT} ..."
rm -rf .next out

case "$MODE" in
  dev)
    printf '%s\n' "Starting development server..."
    exec npm run dev
    ;;
  build)
    printf '%s\n' "Running production build (static export → out/)..."
    exec npm run build
    ;;
  *)
    printf '%s\n' "Usage: $0 [dev|build]" >&2
    exit 1
    ;;
esac
