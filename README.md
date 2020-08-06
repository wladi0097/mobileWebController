# Mobile Web Controller (MWC)

![Check All](https://github.com/wladi0097/mobileWebController/workflows/Check%20All/badge.svg)

as src: 
```html
<script src="./mobileWebController.js"></script>
<script>
const mainElement = document.getElementById('main');
const mwc = mobileWebController.init(mainElement);
</script>
```

as library:
```typescript
import {mobileWebController} from 'mobileWebController';

const mainElement = document.getElementById('main');
const mwc = mobileWebController.init(mainElement);
```

## Components:

#### Visual Only:

| Name | Description | Usage |
|-------|:------------:|----------|
| Text | Just text | `mwc.display.text(text: string)` |
| Image | Just an image | `mwc.display.image(src: string)` |
| Text Image Text | An Image with top and bottom texts | `mwc.display.textImageText(topText: string, src: string, bottomText: string)`

#### Synchronous 'get': 
| Name | Description | Usage |
|-------|:------------:|----------| 
| Buttons | Lists Buttons, which return index on click | `const index: number = await mwc.get.buttons(header?: string, buttons: string[])` |
| Input | Text input, which returns value on submit | `const value: string = await mwc.get.input(header?: string, submitButton?: string")` |
| Drawing | Get Base64 drawing from supplied colors | `const drawing: string = await mwc.get.drawing(header?: string", submitButton?: string", hexColors?: string[])`
