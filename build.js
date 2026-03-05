import esbuild from 'esbuild';
import { readdirSync, writeFileSync, mkdirSync } from 'fs';

const watching = process.argv.includes('--watch');
const banner   = '/* Trillian — Canvas LMS component library | github.com/wwcc-dale/trillian */';

// Individual component source files (exclude index.js and utils.js)
const componentEntries = readdirSync('./src')
  .filter(f => f.endsWith('.js') && f !== 'index.js' && f !== 'utils.js')
  .map(f => `src/${f}`);

mkdirSync('dist', { recursive: true });

const sharedConfig = {
  bundle:  true,
  format:  'iife',
  minify:  true,
  target:  ['es2017'],
  banner:  { js: banner },
};

if (watching) {
  // Watch mode — rebuild on change
  const [ctxComponents, ctxBundle] = await Promise.all([
    esbuild.context({ ...sharedConfig, entryPoints: componentEntries, outdir: 'components' }),
    esbuild.context({ ...sharedConfig, entryPoints: ['src/index.js'], outfile: 'dist/trillian.js' }),
  ]);
  await Promise.all([ctxComponents.watch(), ctxBundle.watch()]);
  console.log('Watching for changes…');
} else {
  // One-shot build
  await Promise.all([
    // Minified individual files → components/  (same path, same interface)
    esbuild.build({ ...sharedConfig, entryPoints: componentEntries, outdir: 'components' }),
    // Combined bundle → dist/trillian.js  (Canvas theme JS slot)
    esbuild.build({ ...sharedConfig, entryPoints: ['src/index.js'], outfile: 'dist/trillian.js' }),
  ]);

  // CSS placeholder — Canvas theme CSS slot, available for custom overrides
  writeFileSync('dist/trillian.css', [
    '/* Trillian — Canvas theme CSS',
    '   Component styles are injected at runtime by trillian.js.',
    '   Add site-wide overrides here if needed. */',
    '',
  ].join('\n'));

  console.log('Build complete.');
  console.log('  Canvas theme JS  →  dist/trillian.js');
  console.log('  Canvas theme CSS →  dist/trillian.css');
  console.log('  Individual       →  components/*.js');
}
