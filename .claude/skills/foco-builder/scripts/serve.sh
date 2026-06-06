#!/usr/bin/env bash
# Sobe o dev server do Next em src/.
# Uso: ./serve.sh [porta]
# Default: porta 3000

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
PORT="${1:-3000}"

cd "$ROOT/src"

# Mata processo anterior na porta, se houver
lsof -ti:"$PORT" 2>/dev/null | xargs -r kill 2>/dev/null || true

echo "Servindo src/ em http://localhost:$PORT"
exec npm run dev -- --port "$PORT"
