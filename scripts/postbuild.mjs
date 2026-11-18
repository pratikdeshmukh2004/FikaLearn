// Emit dist/privacy/index.html so /privacy/ resolves to a real static file.
import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
if (!existsSync('dist/privacy.html')) throw new Error('dist/privacy.html missing');
mkdirSync('dist/privacy', { recursive: true });
copyFileSync('dist/privacy.html', 'dist/privacy/index.html');
console.log('postbuild: dist/privacy/index.html written');
