import { Component, Input } from '@angular/core';

export interface CodeTab {
  label: string;
  code: string;
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
      <pre class="code-body"><code>{{ tabs[activeIndex].code }}</code></pre>
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
      overflow-x: auto;
      color: #e2e8f0;
      font-size: 13px;
      line-height: 1.6;
      font-family: 'SF Mono', 'Fira Code', Consolas, Monaco, monospace;

      code {
        font-family: inherit;
        white-space: pre;
      }
    }
  `]
})
export class CodeSnippetComponent {
  @Input() tabs: CodeTab[] = [];

  activeIndex = 0;
  copied = false;

  copy(): void {
    navigator.clipboard.writeText(this.tabs[this.activeIndex].code).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }
}
