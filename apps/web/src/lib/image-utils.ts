/**
 * Generate a simple color-based blur placeholder.
 * For production, use a library like plaiceholder for better results.
 */
export function generateColorPlaceholder(
    r: number,
    g: number,
    b: number
  ): string {
    // 1x1 pixel SVG with the dominant color
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect fill="rgb(${r},${g},${b})" width="1" height="1"/></svg>`;
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  }
   
  // Usage: generateColorPlaceholder(59, 130, 246) → blue placeholder