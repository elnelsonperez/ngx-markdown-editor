import { Component } from '@angular/core';
import { UploadResult, MdEditorOption } from './../../../src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public options: MdEditorOption = {
    enablePreviewContentClick: false
  };
  public content: string;
  public mode: string = 'editor';

  ngOnInit() {
    let contentArr = ['# Hello, Markdown Editor!'];
    contentArr.push('```javascript ');
    contentArr.push('function Test() {');
    contentArr.push('	console.log("Test");');
    contentArr.push('}');
    contentArr.push('```');
    contentArr.push(' Name | Type');
    contentArr.push(' ---- | ----');
    contentArr.push(' A | Test');
    contentArr.push('![](http://lon-yang.github.io/markdown-editor/favicon.ico)');
    contentArr.push('');
    contentArr.push('- [ ] Taks A');
    contentArr.push('- [x] Taks B');
    contentArr.push('');
    contentArr.push('[Link](https://www.google.com)');
    contentArr.push('');
    this.content = contentArr.join('\r\n');
  }

  changeMode() {
    if (this.mode === 'editor') {
      this.mode = 'preview';
    } else {
      this.mode = 'editor';
    }
  }

  togglePreviewClick() {
    this.options.enablePreviewContentClick = !this.options.enablePreviewContentClick;
    this.options = Object.assign({}, this.options);
  }

  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result: Array<UploadResult> = [];
        for (let file of files) {
          result.push({
            name: file.name,
            url: `https://avatars3.githubusercontent.com/${file.name}`,
            isImg: file.type.indexOf('image') !== -1
          })
        }
        resolve(result);
      }, 3000);
    });
  }
}
