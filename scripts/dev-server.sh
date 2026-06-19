#!/usr/bin/env sh
#
# Manage the Next.js development server.
#
# Usage:
#   ./scripts/dev-server.sh          # stop anything on PORT, then start
#   ./scripts/dev-server.sh start
#   ./scripts/dev-server.sh stop
#   ./scripts/dev-server.sh restart
#
# Environment:
#   PORT   — dev server port (default: 3000)
#
set -eu

ROOT="$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

PORT="${PORT:-3000}"
CMD="${1:-start}"

stop_server() {
  if command -v lsof >/dev/null 2>&1; then
    PIDS="$(lsof -ti ":${PORT}" 2>/dev/null || true)"
    if [ -n "$PIDS" ]; then
      printf '%s\n' "Stopping process(es) on port ${PORT}..."
      # shellcheck disable=SC2086
      kill $PIDS 2>/dev/null || true
      sleep 1
      PIDS="$(lsof -ti ":${PORT}" 2>/dev/null || true)"
      if [ -n "$PIDS" ]; then
        # shellcheck disable=SC2086
        kill -9 $PIDS 2>/dev/null || true
      fi
    fi
  fi

  if command -v pkill >/dev/null 2>&1; then
    pkill -f "next dev" 2>/dev/null || true
  fi
}

ensure_deps() {
  if [ ! -d node_modules ]; then
    printf '%s\n' "Installing dependencies (npm ci)..."
    npm ci
  fi
}

start_server() {
  ensure_deps
  printf '%s\n' "Starting dev server → http://localhost:${PORT}"
  exec npm run dev -- -p "${PORT}"
}

case "$CMD" in
  start)
    stop_server
    start_server
    ;;
  stop)
    stop_server
    printf '%s\n' "Dev server stopped (port ${PORT})."
    ;;
  restart)
    stop_server
    start_server
    ;;
  *)
    printf '%s\n' "Usage: $0 [start|stop|restart]" >&2
    exit 1
    ;;
esac
