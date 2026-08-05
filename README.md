# Email template editor

Demo: https://antonholovko-cloud.github.io/Email-template-editor/

<img width="1287" height="658" alt="image" src="https://github.com/user-attachments/assets/850a580f-9ba8-486c-89c0-1f1d7518a68d" />


A drag-and-drop email template editor component for Angular applications. Build responsive email templates from ready-made content blocks, style them in a visual properties panel, and export clean email-ready HTML — with light/dark themes and optional localStorage autosave built in.

## Angular Compatibility

| Angular Version | Library Version | Status |
|-----------------|-----------------|--------|
| 14.x            | 1.0.7+          | ✅ Supported |
| 15.x            | 1.0.7+          | ✅ Supported |
| 16.x            | 1.0.7+          | ✅ Supported |
| 17.x            | 1.0.7+          | ✅ Supported |
| 18.x            | 1.0.7+          | ✅ Supported |
| 19.x            | 1.0.7+          | ✅ Supported |
| 20.x            | 1.0.7+          | ✅ Supported |
| < 14.x          | -               | ❌ Not Supported |

## Features

- **Block-Based Visual Builder**: Compose emails from drag-and-drop blocks — header, text, image, button, columns, social, video, divider, spacer, and custom HTML
- **Responsive Preview**: Live mobile, tablet, and desktop preview with an edit/preview mode toggle
- **Styling Controls**: Colors, fonts, alignment, padding, and per-block advanced options in a properties panel with Content, Style, and Advanced tabs
- **Dark Theme**: Built-in light and dark editor themes via `config.theme`
- **Autosave**: Opt-in debounced autosave to localStorage with automatic restore on reload
- **Template Gallery**: Five ready-made presets in the [live demo](https://antonholovko-cloud.github.io/Email-template-editor/) to start from
- **Import/Export**: Save and load templates, export email-ready HTML
- **Configurable Toolbar**: Show or hide each toolbar control individually
- **Angular Forms Integration**: Full support for reactive and template-driven forms
- **Sanitized Output**: XSS protection with Angular's DomSanitizer

## Installation

### NPM Installation

```bash
npm install ngx-wysiwyg-editor
```


## Setup

### Import the Module

#### Standalone Component (Angular 14.1+)

```typescript
import { Component } from '@angular/core';
import { WysiwygEditorComponent } from 'ngx-wysiwyg-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WysiwygEditorComponent],
  template: `
    <wysiwyg-editor [(ngModel)]="content"></wysiwyg-editor>
  `
})
export class AppComponent {
  content = '';
}
```

#### Module-based Setup

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxWysiwygEditorModule } from 'ngx-wysiwyg-editor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxWysiwygEditorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage Examples

### Basic Usage

```html
<wysiwyg-editor [(ngModel)]="htmlContent"></wysiwyg-editor>
```

```typescript
export class MyComponent {
  htmlContent = '<p>Initial content</p>';
}
```

### With Configuration

```html
<wysiwyg-editor 
  [(ngModel)]="content"
  [config]="editorConfig"
  [disabled]="isDisabled"
  (contentChange)="onContentChange($event)"
  (blocksChange)="onBlocksChange($event)"
  (blockSelected)="onBlockSelected($event)">
</wysiwyg-editor>
```

```typescript
import { EditorConfig, EmailContent, EmailBlock } from 'ngx-wysiwyg-editor';

export class MyComponent {
  content = '';
  isDisabled = false;
  
  editorConfig: EditorConfig = {
    theme: 'dark',
    height: '600px',
    emailWidth: '600px',
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
    autosaveKey: 'my-email-draft'
  };
  
  onContentChange(content: EmailContent) {
    console.log('HTML:', content.html, 'Blocks:', content.blocks);
  }
  
  onBlocksChange(blocks: EmailBlock[]) {
    console.log('Blocks changed:', blocks);
  }
  
  onBlockSelected(block: EmailBlock) {
    console.log('Selected block:', block.type);
  }
}
```

### Reactive Forms Integration

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WysiwygEditorComponent } from 'ngx-wysiwyg-editor';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [WysiwygEditorComponent, ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <wysiwyg-editor formControlName="content"></wysiwyg-editor>
      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
  `
})
export class FormExampleComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      content: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
      console.log('Form value:', this.form.value);
    }
  }
}
```

### Dark Theme

The editor ships with light and dark themes. Set `theme` in the config (default is light):

```typescript
editorConfig: EditorConfig = {
  theme: 'dark'
};
```

### Autosave

Set `autosaveKey` to enable debounced autosave of blocks and email settings to localStorage. On reload, the editor restores the saved draft automatically (unless non-empty `[blocks]` were provided):

```typescript
editorConfig: EditorConfig = {
  autosaveKey: 'my-email-draft',   // localStorage key — enables autosave
  autosaveDebounceMs: 800,         // debounce for writes (default 800ms)
  autosaveRestore: true            // restore saved state on init (default true)
};
```

### Loading Existing Content

Pass blocks directly, or provide full content with settings:

```html
<wysiwyg-editor
  [blocks]="savedBlocks"
  [emailSettings]="{ width: '600px', backgroundColor: '#ffffff' }">
</wysiwyg-editor>
```

## Configuration Options

### Editor Configuration

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme` | 'light' \| 'dark' | 'light' | Editor color theme |
| `height` | string | '600px' | Editor height |
| `minHeight` | string | - | Minimum editor height |
| `maxHeight` | string | - | Maximum editor height |
| `emailWidth` | string | '600px' | Width of the email canvas |
| `backgroundColor` | string | '#f4f4f4' | Email background color |
| `fontFamily` | string | 'Arial, sans-serif' | Default font family |
| `showBlockPanel` | boolean | true | Show/hide the blocks side panel |
| `showPropertiesPanel` | boolean | true | Show/hide the properties side panel |
| `autosaveKey` | string | - | localStorage key; setting it enables autosave |
| `autosaveDebounceMs` | number | 800 | Debounce for autosave writes |
| `autosaveRestore` | boolean | true | Restore saved state on init |
| `toolbar` | ToolbarConfig | See below | Toolbar visibility configuration |

### Toolbar Configuration

You can control which button groups are displayed in the toolbar by providing a `toolbar` configuration object:

```typescript
import { EditorConfig } from 'ngx-wysiwyg-editor';

export class MyComponent {
  editorConfig: EditorConfig = {
    height: '500px',
    toolbar: {
      showBlocksButton: true,      // Show/hide "Blocks" button (default: true)
      showSettingsButton: true,    // Show/hide "Settings" button (default: true)
      showSaveButton: true,        // Show/hide "Save" button (default: true)
      showLoadButton: true,        // Show/hide "Load" button (default: true)
      showExportButton: true,      // Show/hide "Export" dropdown (default: true)
      showDeviceSelector: true,    // Show/hide device preview selector (default: true)
      showViewModeToggle: true,    // Show/hide Edit/Preview mode toggle (default: true)
      showClearAllButton: true     // Show/hide "Clear All" button (default: true)
    }
  };
}
```

#### Example: Minimal Toolbar

To create a minimal toolbar with only essential buttons:

```typescript
editorConfig: EditorConfig = {
  toolbar: {
    showBlocksButton: true,
    showSettingsButton: false,
    showSaveButton: false,
    showLoadButton: false,
    showExportButton: true,
    showDeviceSelector: false,
    showViewModeToggle: true,
    showClearAllButton: false
  }
};
```

#### Example: Export-Only Toolbar

For a read-only view with export capabilities:

```typescript
editorConfig: EditorConfig = {
  toolbar: {
    showBlocksButton: false,
    showSettingsButton: false,
    showSaveButton: false,
    showLoadButton: false,
    showExportButton: true,
    showDeviceSelector: true,
    showViewModeToggle: true,
    showClearAllButton: false
  }
};
```

## Available Blocks

- **Header**: Company branding with customizable name and tagline
- **Text**: Rich text content with formatting options
- **Image**: Image insertion with alt text and linking
- **Button**: Call-to-action buttons with custom styling
- **Columns**: Multi-column layouts (2, 3, or 4 columns)
- **Social**: Social media links with icons
- **Video**: Video embedding with custom thumbnails
- **Divider**: Visual separators with styling options
- **Spacer**: Adjustable spacing elements
- **HTML**: Custom HTML code insertion

## Inputs

| Input | Type | Description |
|-------|------|-------------|
| `config` | EditorConfig | Editor configuration (see above) |
| `disabled` | boolean | Disable the editor |
| `blocks` | EmailBlock[] | Set the editor's blocks programmatically |
| `emailSettings` | object | Email-level settings (width, background color, etc.) |
| `initialContent` | EmailContent | Blocks and settings in one object |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `contentChange` | EventEmitter<EmailContent> | Emitted with HTML, blocks, and settings on every change |
| `blocksChange` | EventEmitter<EmailBlock[]> | Emitted when the block list changes |
| `blockSelected` | EventEmitter<EmailBlock> | Emitted when a block is selected |

## Building from Source

### Prerequisites

- Node.js (v14 or higher recommended, v22+ also supported)
- npm or yarn
- Angular CLI (v14 or higher)
- Angular 14.0.0 or higher

### Build Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build library
npm run build

# Build library (production)
npm run build:lib

# Run demo application
npm run serve:demo

# Build for NuGet
./scripts/build.sh          # Unix/Linux/macOS
.\scripts\build.ps1         # Windows PowerShell

# Pack NuGet package
./scripts/pack-nuget.sh     # Unix/Linux/macOS
.\scripts\pack-nuget.ps1    # Windows PowerShell

# Deploy demo to GitHub Pages (manual - requires git authentication)
npm run deploy:demo:gh-pages
```

### Automated Deployment

The demo is automatically deployed to GitHub Pages when code is pushed to the `main` branch using GitHub Actions. The workflow:

1. Builds the demo with the correct base-href
2. Adds a `.nojekyll` file (required for Angular apps on GitHub Pages)
3. Deploys to the `gh-pages` branch

You can also manually trigger the deployment from the GitHub Actions tab.
## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Requirements

- **Angular**: 14.0.0 or higher
- **TypeScript**: 4.7.0 or higher
- **RxJS**: 7.5.0 or higher
- **Zone.js**: 0.11.4 or higher

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions, please [create an issue](https://github.com/antonholovko-cloud/Email-template-editor/issues) on GitHub.

## Acknowledgments

- Angular team for the amazing framework
- All contributors who help improve this library
