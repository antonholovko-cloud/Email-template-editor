import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface CodeTab {
  label: string;
  code: string;
}

const TS_KEYWORDS =
  'import|from|export|class|const|let|var|return|new|void|this|extends|implements|interface|type|function|if|else|true|false|null|undefined|private|public|readonly|async|await|standalone';

function escapeHtml(code: string): string {
  return code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function highlightTs(escaped: string): string {
  const pattern = new RegExp(
    [
      '(\\/\\/[^\\n]*)',                       // 1 line comment
      "('(?:[^'\\\\\\n]|\\\\.)*')",            // 2 single-quoted string
      '(`(?:[^`\\\\]|\\\\.)*`)',               // 3 template string
      '(@\\w+)',                               // 4 decorator
      `\\b(${TS_KEYWORDS})\\b`,                // 5 keyword
      '(\\b\\d+(?:\\.\\d+)?\\b)'               // 6 number
    ].join('|'),
    'g'
  );
  return escaped.replace(pattern, (m, com, str, tpl, dec, kw, num) => {
    if (com) return `<span class="tok-com">${com}</span>`;
    if (str || tpl) return `<span class="tok-str">${m}</span>`;
    if (dec) return `<span class="tok-dec">${dec}</span>`;
    if (kw) return `<span class="tok-kw">${kw}</span>`;
    if (num) return `<span class="tok-num">${num}</span>`;
    return m;
  });
}

function highlightHtml(escaped: string): string {
  // attribute="value" pairs (source was escaped, so quotes are &quot;)
  let out = escaped.replace(
    /([\[\(#]*[\w-]+[\]\)]*)=(&quot;.*?&quot;)/g,
    '<span class="tok-attr">$1</span>=<span class="tok-str">$2</span>'
  );
  // tag names in <tag>, </tag>
  out = out.replace(
    /(&lt;\/?)([\w-]+)/g,
    '$1<span class="tok-tag">$2</span>'
  );
  // template reference variables like #editorComponent on their own
  out = out.replace(/(\s)(#[\w-]+)(?=[\s\n]|&gt;)/g, '$1<span class="tok-attr">$2</span>');
  return out;
}

function highlightShell(escaped: string): string {
  return escaped.replace(/^(npm|npx|ng|yarn|pnpm)\b/gm, '<span class="tok-kw">$1</span>');
}

@Component({
  selector: 'app-code-snippet',
  template: `
    <div class="code-snippet">
      <div class="code-snippet-header">
        <div class="code-tabs">
          <button
            *ngFor="let tab of tabs; let i = index"
            type="button"
            class="code-tab"
            [class.active]="i === activeIndex"
            (click)="activeIndex = i">
            {{ tab.label }}
          </button>
        </div>
        <button type="button" class="copy-btn" (click)="copy()">
          {{ copied ? '✓ Copied' : 'Copy' }}
        </button>
      </div>
      <pre class="code-body"><code [innerHTML]="highlighted[activeIndex]"></code></pre>
    </div>
  `,
  styles: [`
    .code-snippet {
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #2d3748;
      background: #1a202c;
      margin: 20px 0;
    }

    .code-snippet-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #2d3748;
      padding: 0 8px;
    }

    .code-tabs {
      display: flex;
      overflow-x: auto;
    }

    .code-tab {
      background: transparent;
      border: none;
      color: #a0aec0;
      padding: 10px 16px;
      font-size: 13px;
      font-family: 'SF Mono', 'Fira Code', Consolas, Monaco, monospace;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      white-space: nowrap;

      &:hover {
        color: #e2e8f0;
      }

      &.active {
        color: #ffffff;
        border-bottom-color: #667eea;
      }
    }

    .copy-btn {
      background: transparent;
      border: 1px solid #4a5568;
      color: #a0aec0;
      border-radius: 4px;
      padding: 4px 12px;
      font-size: 12px;
      cursor: pointer;
      flex-shrink: 0;
      margin-left: 8px;

      &:hover {
        color: #ffffff;
        border-color: #667eea;
      }
    }

    .code-body {
      margin: 0;
      padding: 16px 20px;
      overflow: auto;
      max-height: 480px;
      color: #e2e8f0;
      font-size: 13px;
      line-height: 1.6;
      font-family: 'SF Mono', 'Fira Code', Consolas, Monaco, monospace;

      code {
        font-family: inherit;
        white-space: pre;
      }

      &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: #4a5568;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #1a202c;
      }
    }

    ::ng-deep .tok-kw { color: #c678dd; }
    ::ng-deep .tok-str { color: #98c379; }
    ::ng-deep .tok-com { color: #7f848e; font-style: italic; }
    ::ng-deep .tok-dec { color: #e5c07b; }
    ::ng-deep .tok-num { color: #d19a66; }
    ::ng-deep .tok-tag { color: #e06c75; }
    ::ng-deep .tok-attr { color: #d19a66; }
  `]
})
export class CodeSnippetComponent implements OnChanges {
  @Input() tabs: CodeTab[] = [];

  activeIndex = 0;
  copied = false;
  highlighted: SafeHtml[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.highlighted = this.tabs.map(tab => {
      const escaped = escapeHtml(tab.code);
      let html: string;
      if (tab.label === 'HTML') {
        html = highlightHtml(escaped);
      } else if (tab.label === 'Install') {
        html = highlightShell(escaped);
      } else {
        html = highlightTs(escaped);
      }
      // Safe: source is escaped above; only our own span markup is injected.
      return this.sanitizer.bypassSecurityTrustHtml(html);
    });
    if (this.activeIndex >= this.tabs.length) {
      this.activeIndex = 0;
    }
  }

  copy(): void {
    navigator.clipboard.writeText(this.tabs[this.activeIndex].code).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }
}
