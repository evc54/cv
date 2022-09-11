import type {
  Work,
  Project,
} from './types';

// image base url
const baseUrl: string = import.meta.env.VITE_IMAGE_SERVER;

/**
 * @function getMultiplier
 * @description Convert multiplier from numerical to textual format.
 * @param {number} size image size multiplier
 * @returns {string}
 */
const getMultiplier = (size: number): string => size > 1 ? `_${size}x` : '';

/**
 * @function getBaseUrl
 * @description Return static files base url.
 * @returns {string}
 */
export const getBaseUrl = (): string => baseUrl;

/**
 * @function getLogoUrl
 * @description Return project logo image url.
 * @param {string} projectId project id
 * @param {number} size image size multiplier
 * @returns {string}
 */
export const getLogoUrl = (projectId: string, size: number = 1): string => {
  return `${baseUrl}/${projectId}/${projectId}_logo${getMultiplier(size)}.png`;
};

/**
 * @function getScreenshotUrl
 * @description Return screenshot image url.
 * @param {string} projectId project id
 * @param {number} idx screenshot index
 * @returns {string}
 */
export const getScreenshotUrl = (projectId: string, idx: number): string => {
  return `${baseUrl}/${projectId}/${projectId}-${idx}.jpg`;
};

/**
 * @function getThumbnailUrl
 * @description Return screenshot thumbnail image url.
 * @param {string} projectId project id
 * @param {number} idx screenshot index
 * @param {number} size image size multiplier
 * @returns {string}
 */
export const getThumbnailUrl = (projectId: string, idx: number, size: number = 1): string => {
  return `${baseUrl}/${projectId}/${projectId}-${idx}_thumb${getMultiplier(size)}.jpg`;
};

/**
 * @function convertWorkToProject
 * @description Convert work to project.
 * @param {Work} work work data
 * @returns {Project} project data
 */
export const convertWorkToProject = (work: Work): Project => {
  const {
    id,
    name,
    summary,
    year,
    live = false,
    git = false,
  } = work;

  return {
    id,
    name,
    summary,
    year,
    live: Boolean(live),
    git: Boolean(git),
  };
};
