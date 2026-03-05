export const titleToPathname = (title) => title.toLowerCase().replaceAll(' ', '-');

export const titleToProjectId = (title="") => title.toLowerCase().replaceAll(' ', '').replaceAll('.', '');