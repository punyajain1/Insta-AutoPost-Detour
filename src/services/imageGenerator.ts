import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import React from 'react';
import { FeedCardComponent } from '../templates/cards/FeedCardComponent';
import fs from 'fs';
import path from 'path';

let fontBuffer: Buffer | null = null;

function getFont() {
  if (fontBuffer) return fontBuffer;
  const fontPath = path.resolve(process.cwd(), 'fonts/Roboto-Regular.ttf');
  fontBuffer = fs.readFileSync(fontPath);
  return fontBuffer;
}

export async function generateCardImage(card: any): Promise<Buffer> {
  const font = getFont();

  const svg = await satori(
    React.createElement(FeedCardComponent, { card }),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Inter', // Keeping family name Inter for the styles to pick up, though it's Roboto
          data: font,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1920,
    },
  });

  const pngData = resvg.render();
  return pngData.asPng();
}
