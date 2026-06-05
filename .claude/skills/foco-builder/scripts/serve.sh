#!/usr/bin/env bash
# Serve preview/ ou src/ para visualização local.
# Uso: ./serve.sh [preview|src] [porta]
# Default: preview na 8080

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../.." && pwd)"
TARGET="${1:-preview}"
PORT="${2:-8080}"

if [[ ! -d "$ROOT/$TARGET" ]]; then
  echo "Erro: diretório $ROOT/$TARGET não existe."
  exit 1
fi

# Mata processo anterior na porta, se houver
lsof -ti:"$PORT" 2>/dev/null | xargs -r kill 2>/dev/null || true

cd "$ROOT/$TARGET"
echo "Servindo $TARGET/ em http://localhost:$PORT"
exec python3 -m http.server "$PORT"
