// image base url
const baseUrl: string = import.meta.env.VITE_IMAGE_SERVER;

/**
 * Convert multiplier from numerical to textual format.
 * @param {number} size image size multiplier
 * @returns {string}
 */
function getMultiplier(size: number): string {
  return size > 1 ? `_${size}x` : '';
}

/**
 * Return static files base url.
 * @returns {string}
 */
export function getBaseUrl(): string {
  return baseUrl;
}

/**
 * Return project logo image url.
 * @param {string} projectId project id
 * @param {number} size image size multiplier
 * @returns {string}
 */
export function getLogoUrl(projectId: string, size: number = 1): string {
  return `${baseUrl}/${projectId}/${projectId}_logo${getMultiplier(size)}.png`;
}

/**
 * Return screenshot image url.
 * @param {string} projectId project id
 * @param {number} idx screenshot index
 * @returns {string}
 */
export function getScreenshotUrl(projectId: string, idx: number): string {
  return `${baseUrl}/${projectId}/${projectId}-${idx}.jpg`;
}

/**
 * Return screenshot thumbnail image url.
 * @param {string} projectId project id
 * @param {number} idx screenshot index
 * @param {number} size image size multiplier
 * @returns {string}
 */
export function getThumbnailUrl(projectId: string, idx: number, size: number = 1): string {
  return `${baseUrl}/${projectId}/${projectId}-${idx}_thumb${getMultiplier(size)}.jpg`;
}
