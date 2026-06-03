import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import {
  AssistantMessageRenderer,
  normalizeAssistantMarkdown,
} from "../src/components/chat/assistant-message-renderer";
import {
  buildConversationRequestBody,
  buildUtf8JsonHeaders,
  hasBrokenTextEncoding,
} from "../src/lib/text-encoding";

test("frontend conversation payload preserves exact bengali text", () => {
  const content =
    "আমার বস আমার উচ্চারণ নিয়ে হাসাহাসি করে এবং বলে আমি এখানে মানাই না।";
  const payload = buildConversationRequestBody({
    content,
    language: "bn",
  });

  assert.equal(payload, JSON.stringify({ content, language: "bn" }));
  assert.equal(JSON.parse(payload).content, content);
  assert.equal(hasBrokenTextEncoding(content), false);
});

test("frontend mojibake guard catches broken multilingual text", () => {
  assert.equal(hasBrokenTextEncoding("αªåαª«αª╛"), true);
  assert.equal(hasBrokenTextEncoding("à¦à¦®à¦¾à¦°"), true);
  assert.equal(hasBrokenTextEncoding("hello"), false);
});

test("frontend utf8 headers include charset", () => {
  const headers = buildUtf8JsonHeaders();

  assert.equal(headers.get("Content-Type"), "application/json; charset=utf-8");
  assert.equal(headers.get("Accept"), "application/json; charset=utf-8");
});

test("assistant markdown renderer outputs semantic bold and list markup", () => {
  const html = renderToStaticMarkup(
    <AssistantMessageRenderer
      content={"**Important**\n\n- one\n- two"}
    />
  );

  assert.match(html, /<strong>Important<\/strong>/);
  assert.match(html, /<ul>/);
  assert.match(html, /<li>one<\/li>/);
  assert.doesNotMatch(html, /\*\*Important\*\*/);
});

test("assistant markdown normalization preserves paragraph spacing", () => {
  assert.equal(
    normalizeAssistantMarkdown("Line one\n\n\nLine two  \n"),
    "Line one\n\nLine two"
  );
});
