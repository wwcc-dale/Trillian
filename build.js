import esbuild from 'esbuild';
import { readdirSync, mkdirSync } from 'fs';

const watching = process.argv.includes('--watch');
const banner   = '/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */';

// Individual component source files (exclude shared library files)
const SHARED = new Set(['index.js', 'utils.js', 'icons.js']);
const componentEntries = readdirSync('./src')
  .filter(f => f.endsWith('.js') && !SHARED.has(f))
  .map(f => `src/${f}`);

mkdirSync('dist', { recursive: true });

const sharedConfig = {
  bundle:  true,
  format:  'iife',
  minify:  true,
  target:  ['es2017'],
  banner:  { js: banner },
  loader:  { '.css': 'text' },
};

const cssConfig = {
  bundle:  true,
  minify:  true,
  banner:  { css: banner },
};

if (watching) {
  const [ctxComponents, ctxBundle, ctxCss] = await Promise.all([
    esbuild.context({ ...sharedConfig, entryPoints: componentEntries, outdir: 'components' }),
    esbuild.context({ ...sharedConfig, entryPoints: ['src/index.js'],  outfile: 'dist/trillian.js' }),
    esbuild.context({ ...cssConfig,    entryPoints: ['src/index.css'], outfile: 'dist/trillian.css' }),
  ]);
  await Promise.all([ctxComponents.watch(), ctxBundle.watch(), ctxCss.watch()]);
  console.log('Watching for changes…');
} else {
  await Promise.all([
    esbuild.build({ ...sharedConfig, entryPoints: componentEntries,  outdir: 'components' }),
    esbuild.build({ ...sharedConfig, entryPoints: ['src/index.js'],  outfile: 'dist/trillian.js' }),
    esbuild.build({ ...cssConfig,    entryPoints: ['src/index.css'], outfile: 'dist/trillian.css' }),
  ]);

  console.log('Build complete.');
  console.log('  Canvas theme JS  →  dist/trillian.js');
  console.log('  Canvas theme CSS →  dist/trillian.css');
  console.log('  Individual       →  components/*.js');
}
