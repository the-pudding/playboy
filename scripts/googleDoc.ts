import url from "url";
import fs from "fs/promises";

import fetch from "node-fetch";
import htmlparser from "htmlparser2";
import { decode } from "html-entities";
import archieml from "archieml";

async function getGoogleDoc(docId: string) {
  const resp = await fetch(
    `https://docs.google.com/document/d/${docId}/export?format=html`
  );
  const html = await resp.text();

  let parsedText;
  const parser = new htmlparser.Parser(
    new htmlparser.DomHandler((error, dom) => {
      const tagHandlers = {
        _base: function (tag) {
          var str = "";
          tag.children.forEach(function (child) {
            let func;
            if ((func = tagHandlers[child.name || child.type]))
              str += func(child);
          });
          return str;
        },
        text: function (textTag) {
          return textTag.data;
        },
        span: function (spanTag) {
          const str = tagHandlers._base(spanTag);
          return str;
        },
        p: function (pTag) {
          return tagHandlers._base(pTag) + "\n";
        },
        a: function (aTag) {
          var href = aTag.attribs.href;
          if (href === undefined) return "";

          // extract real URLs from Google's tracking
          // from: http://www.google.com/url?q=http%3A%2F%2Fwww.nytimes.com...
          // to: http://www.nytimes.com...
          if (
            aTag.attribs.href &&
            url.parse(aTag.attribs.href, true).query &&
            url.parse(aTag.attribs.href, true).query.q
          ) {
            href = url.parse(aTag.attribs.href, true).query.q;
          }

          var str = '<a href="' + href + '" target="_blank">';
          str += tagHandlers._base(aTag);
          str += "</a>";
          return str;
        },
        li: function (tag) {
          return "* " + tagHandlers._base(tag) + "\n";
        },
      };

      ["ul", "ol"].forEach(function (tag) {
        tagHandlers[tag] = tagHandlers.span;
      });
      ["h1", "h2", "h3", "h4", "h5", "h6"].forEach(function (tag) {
        tagHandlers[tag] = tagHandlers.p;
      });

      // @ts-ignore
      parsedText = tagHandlers._base(dom[0].children[0].next);
      // Convert html entities into the characters as they exist in the google doc
      parsedText = decode(parsedText);

      // Remove smart quotes from inside tags
      parsedText = parsedText.replace(/<[^<>]*>/g, function (match) {
        return match.replace(/”|“/g, '"').replace(/‘|’/g, "'");
      });
    })
  );
  parser.write(html);
  parser.end();

  const parsed = archieml.load(parsedText);
  await fs.writeFile("src/data/doc.json", JSON.stringify(parsed, null, 2));
}

getGoogleDoc("1KkU46Rj0Jb7n7vIRV6NT-gZM0wjgoneCM_ijESHG-9o");
