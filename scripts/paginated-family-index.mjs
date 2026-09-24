const hrefFor = (route) => `href="${route}"`;

const paginationHrefs = (html, familyRoot) => {
  const escapedRoot = familyRoot.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matcher = new RegExp(`href="(${escapedRoot}/page/[1-9][0-9]*)"`, 'g');
  return [...html.matchAll(matcher)].map((match) => match[1]);
};

export const familyIndexIncludesRoute = async ({ route, familyRoot, initialHtml, fetchPage }) => {
  if (initialHtml.includes(hrefFor(route))) return true;

  const pages = [...new Set(paginationHrefs(initialHtml, familyRoot))]
    .filter((page) => page !== familyRoot)
    .sort((left, right) => Number(left.split('/').at(-1)) - Number(right.split('/').at(-1)));

  for (const page of pages) {
    const html = await fetchPage(page);
    if (html.includes(hrefFor(route))) return true;
  }

  return false;
};
