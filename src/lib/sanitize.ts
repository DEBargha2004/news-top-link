import sanitizeHtml from "sanitize-html";

/**
 * Sanitize HTML for card/preview snippets.
 * Allows only inline formatting tags — safe for truncated body previews.
 */
export function sanitizeSnippet(dirty: string): string {
  return sanitizeHtml(dirty, {
    allowedTags: ["b", "i", "em", "strong", "a", "span"],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      span: ["style"],
    },
  });
}

/**
 * Sanitize HTML for full article bodies.
 * Preserves block-level formatting (headings, lists, tables, images, etc.)
 * for proper rendering with @tailwindcss/typography prose styles.
 */
export function sanitizeArticle(dirty: string): string {
  return sanitizeHtml(dirty, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "figure",
      "figcaption",
      "iframe",
      "video",
      "source",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "width", "height", "loading", "class"],
      iframe: [
        "src",
        "width",
        "height",
        "allowfullscreen",
        "title",
        "class",
      ],
      a: ["href", "target", "rel", "class"],
      "*": ["class", "style"],
    },
    allowedIframeHostnames: ["www.youtube.com", "youtube.com"],
  });
}
