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

## AnimatedTextWriter Props

| Prop | Type | Default | Description |
|-----|------|---------|-------------|
| `content` | `string` | `""` | Text content that will be displayed with the typing animation. |
| `prefix` | `string` | `""` | Text displayed before the animated content. |
| `suffix` | `string` | `""` | Text displayed after the animated content. |
| `replacablePrefix` | `string` | `""` | Placeholder text that will be replaced by the animated `content`. |
| `codePrefix` | `string` | `""` | Optional prefix displayed before code content when using the code wrapper. |
| `codeSuffix` | `string` | `""` | Optional suffix displayed after code content when using the code wrapper. |
| `delay` | `number` | `50` | Delay in milliseconds between each typed character. |
| `startDelay` | `number` | `0` | Delay before the typing animation begins. |
| `displayCursor` | `boolean` | `true` | Shows a blinking cursor during typing animation. |
| `displayCursorEnd` | `boolean` | `true` | Keeps the cursor visible after typing finishes. |
| `displayCodeWrapper` | `boolean` | `false` | Displays the animated text inside a code-editor styled container. |
| `displayCodeLineNumber` | `boolean` | `false` | Shows line numbers when `displayCodeWrapper` is enabled. |
| `displayCodeLineNumberMax` | `number` | `undefined` | Maximum number of line numbers to display. |
| `className` | `string` | `""` | Custom CSS class applied to the main container. |
| `cursorColor` | `string` | `currentColor` | Color of the blinking cursor. |
| `cursorLineHeight` | `string` | `"1em"` | Line height for the cursor element. |
| `codeWrapperClasses` | `string` | `""` | Additional CSS classes for the code wrapper container. |
| `codeWrapperStyle` | `string \| React.CSSProperties` | `{}` | Inline styles applied to the code wrapper container. |
| `codeWrapperWhiteSpace` | `"auto" \| "nowrap"` | `"auto"` | Controls white-space behavior inside the code wrapper. |
| `displayClickMoreButtonAndPause` | `boolean` | `false` | Shows a **View More** button and pauses typing until the user clicks it. |
| `displayFullContentOnClickMoreButton` | `boolean` | `false` | Displays the entire remaining content when the **View More** button is clicked. |
| `clickMoreHeaderText` | `string` | `""` | Optional header text shown above the **View More** section. |
| `clickMoreHeaderClassString` | `string` | `""` | CSS class applied to the **View More** header. |
| `viewMoreButtonText` | `string` | `"View More"` | Text displayed on the button to expand content. |
| `viewLessButtonText` | `string` | `"View Less"` | Text displayed on the button to collapse content. |
| `showContentAuto` | `boolean` | `false` | Automatically expands the full content without user interaction. |
| `sx` | `React.CSSProperties` | `{}` | Inline styles applied to the root component container. |

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

MIT © Abdullah Ibne Alam

---

## Contributing

Pull requests are welcome! <br />
If you have ideas for enhancements or performance improvements, feel free to open an issue.<br />
[https://github.com/RepulsiveCoder/react-animated-text-writer](https://github.com/RepulsiveCoder/react-animated-text-writer)

---

## If you like it…

Drop a ⭐ on the repo and use it to make your UI feel alive!
