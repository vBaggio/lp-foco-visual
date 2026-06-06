/**
 * sync-assets.mjs
 *
 * Copia assets canônicos de /assets/{brand,images}/ para src/public/{brand,images}/
 * antes do build/dev. Executa via npm scripts predev/prebuild.
 *
 * Por que existe: manter source-of-truth única em /assets/ (acima do src/)
 * sem usar symlinks (Vercel onBuildComplete falha com symlinks que apontam
 * para fora do Root Directory).
 *
 * Idempotente: limpa o destino antes de copiar.
 * Path-safe: resolve a partir do próprio script, não da CWD.
 */
import { cpSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_ROOT = resolve(__dirname, "..", "..", "assets");
const PUBLIC_ROOT = resolve(__dirname, "..", "public");

const SUBDIRS = ["brand", "images"];

for (const subdir of SUBDIRS) {
  const from = resolve(ASSETS_ROOT, subdir);
  const to = resolve(PUBLIC_ROOT, subdir);

  if (!existsSync(from)) {
    console.error(`✗ Source missing: ${from}`);
    process.exit(1);
  }

  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
  console.log(`✓ Synced public/${subdir}/`);
}
