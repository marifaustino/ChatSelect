import { Fragment } from "react";

const URL_SPLIT_PATTERN = /(https?:\/\/[^\s)]+)/g;
const URL_TEST_PATTERN = /^https?:\/\//;

/** Splits text on embedded http(s) URLs and renders them as links, leaving
 * the rest as plain text. Used for the free-text "Fonte" field, which often
 * embeds a DOI/URL inline within a citation sentence. */
export function Linkify({ text }: { text: string }) {
  const parts = text.split(URL_SPLIT_PATTERN);
  return (
    <>
      {parts.map((part, index) =>
        URL_TEST_PATTERN.test(part) ? (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {part}
          </a>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
