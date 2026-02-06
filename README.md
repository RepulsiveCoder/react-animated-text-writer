# react-animated-text-writer ✍️

A highly customizable React component that renders text with a **typing animation**, complete with optional **blinking cursor**, **prefix/suffix injection**, and an optional **code-editor style wrapper** featuring line numbers and syntax highlighting.

Perfect for landing pages, developer portfolios, documentation demos, and code walkthroughs.

---

## Features

- Typing animation with configurable speed
- Start delay support
- Blinking cursor (inline or end-only)
- Prefix & suffix injection (HTML supported)
- Replaceable prefix during typing
- Code editor–style wrapper
  - Syntax highlighting (CSS-based)
  - Line numbers
  - Code prefix & suffix support
- "Click more / view full content" interaction
- Fully styleable via className, inline styles, and props

---

## Installation

```bash
npm install react-animated-text-writer
```

or

```bash
yarn add react-animated-text-writer
```


## Basic Usage

```tsx
import AnimatedTextWriter from "react-animated-text-writer";

<AnimatedTextWriter
  delay={50}
  startDelay={1000}
  content={`(PHP, Laravel, Next.js, React, NestJS, Vue.js, Node.js, Spring Boot ...)`}
  prefix={`<li>Full-stack application development<br /><div style="margin: 0 0 .5em; font-size: 0.7em">`}
  suffix={`</div></li>`}
  displayCursorEnd={false}
  cursorColor="#666"
/>;
```

---

## Code Editor Style Example

```tsx
<AnimatedTextWriter
  delay={50}
  content={`<span class="keyword">import </span>
<span class="bracket">{</span>
<span class="variable"> useEffect, useRef, useState </span>
<span class="bracket">} </span>
<span class="keyword">from </span>
<span class="quotation">"react"</span><span class="function">;</span><br /><br />

<span class="keyword">import </span>
<span class="quotation">"./AnimatedTextWriter.css"</span><span class="function">;</span><br /><br />

<span class="reserve">const </span>
<span class="function">getIncrement = </span>
<span class="bracket">(</span>
<span class="variable">content: <span class="comment">string</span>, index: <span class="comment">number</span>, fistCall=<span class="literal">true</span></span>
<span class="bracket">) </span>
<span class="reserve">=> </span>
<span class="bracket">{</span><br />
&nbsp;&nbsp;<span class="keyword">return </span>
<span class="variable">theMaxIncrementPossible</span><span class="function">;</span><br />
<span class="bracket">}</span>`}
  prefix="<h1 class='animated-text-title-header'>Next.js</h1>"
  codePrefix={`<code class='react'><span class="comment">// This website is built using Next.js</span><br /><br />`}
  codeSuffix={`</code>`}
  displayCodeWrapper
  displayCodeLineNumber
/>
```

---

## Props

```ts
interface AnimatedTextWriterProps {
  content?: string;
  prefix?: string;
  suffix?: string;
  replacablePrefix?: string;

  codePrefix?: string;
  codeSuffix?: string;

  delay?: number;
  startDelay?: number;

  displayCursor?: boolean;
  displayCursorEnd?: boolean;

  displayCodeWrapper?: boolean;
  displayCodeLineNumber?: boolean;
  displayCodeLineNumberMax?: number;

  className?: string;

  cursorColor?: string;
  cursorLineHeight?: string;

  codeWrapperClasses?: string;
  codeWrapperStyle?: string | React.CSSProperties;
  codeWrapperWhiteSpace?: "auto" | "nowrap";

  displayClickMoreButtonAndPause?: boolean;
  displayFullContentOnClickMoreButton?: boolean;

  clickMoreHeaderText?: string;
  clickMoreHeaderClassString?: string;
  viewMoreButtonText?: string;
  viewLessButtonText?: string;

  showContentAuto?: boolean;
  sx?: React.CSSProperties;
}
```

---

## Styling & Syntax Highlighting

This component **does not enforce any syntax highlighting library**.
You’re free to style code using your own CSS classes:

```css
.keyword { color: #c792ea; }
.variable { color: #82aaff; }
.comment { color: #7f848e; }
.bracket { color: #89ddff; }
.quotation { color: #ecc48d; }
```

This gives you full control over themes and editor appearance.

---

## Tips

* `content`, `prefix`, and `suffix` accept **HTML strings**
* Use `replacablePrefix` to dynamically swap placeholder text
* Combine `displayClickMoreButtonAndPause` with long content for better UX
* For code animation, set `displayCodeWrapper={true}`

---

## License

MIT © Your Name

---

## Contributing

Pull requests are welcome! <br />
If you have ideas for enhancements or performance improvements, feel free to open an issue.<br />
[https://github.com/RepulsiveCoder/react-animated-text-writer](https://github.com/RepulsiveCoder/react-animated-text-writer)

---

## If you like it…

Drop a ⭐ on the repo and use it to make your UI feel alive!

