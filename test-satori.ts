
import satori from 'satori';
import { Download } from 'lucide-react';
import React from 'react';

async function test() {
  const ReactInternals = (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (ReactInternals && ReactInternals.ReactCurrentDispatcher) {
    ReactInternals.ReactCurrentDispatcher.current = {
      useContext: () => ({}),
      useMemo: (cb) => cb(),
      useEffect: () => {},
      useLayoutEffect: () => {},
      useCallback: (cb) => cb,
      useState: (initial) => [typeof initial === 'function' ? initial() : initial, () => {}],
    };
  }

  try {
    const svg = await satori(
      React.createElement('div', { style: { display: 'flex' } }, 
        React.createElement(Download, { size: 24, color: 'red' })
      ),
      {
        width: 100,
        height: 100,
        fonts: [
          {
            name: 'Inter',
            data: Buffer.alloc(10), // fake font
            weight: 400,
            style: 'normal',
          },
        ],
      }
    );
    console.log('Success!');
  } catch (e) {
    console.error('Satori error:', e);
  }
}
test();
