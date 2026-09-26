const activePublicationDateOverrides = new Map([
  ['/blog/database-verification-former-employee-contact', '2026-09-07'],
]);

export function activePublicationDate(route, fallback) {
  return activePublicationDateOverrides.get(route) ?? fallback;
}
