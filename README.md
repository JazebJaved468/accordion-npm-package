# accordion-npm-package

React Native Accordion Component

## Installation

`npm install @jazebjaved/accordion`
or
` yarn add @jazebjaved/accordion`

Install the following dependency if not already installed.

## Dependencies

react-native-svg

`npm install react-native-svg`
or
`yarn add react-native-svg`

# Usage

import Accordion from '@jazebjaved/accordion'

### Template with types

`<Accordion title={<string>} content={<ReactNode>}/>`

### Example

`<Accordion title="Title" content={<View><Text>Content</Text></View>}/>`

## Props

| Prop            | Type      | Description                       | Required | Default Value |
| --------------- | --------- | --------------------------------- | -------- | ------------- |
| title           | string    | Title of the accordion            | ✔        | -             |
| content         | ReactNode | Content of the accordion          | ✔        | -             |
| px              | number    | Padding on x-axis                 | ❌       | 10            |
| py              | number    | Padding on y-axis                 | ❌       | 6             |
| bgC             | string    | Background color of the accordion | ❌       | #eee          |
| borderRadius    | number    | Border radius of the accordion    | ❌       | 6             |
| gap             | number    | Gap between title and content     | ❌       | 10            |
| titleColor      | string    | Color of the title                | ❌       | #000          |
| titleFontSize   | number    | Font size of the title            | ❌       | 16            |
| titleFontWeight | string    | Font weight of the title          | ❌       | 600           |
| contentBgC      | string    | Background color of the content   | ❌       | #fff          |
| contentPx       | number    | Padding on x-axis of the content  | ❌       | 10            |
| contentPy       | number    | Padding on y-axis of the content  | ❌       | 6             |
| --------------- | --------- | --------------------------------- | -------- | ------------  |

## Example

```jsx
import React from 'react';
import {View, Text} from 'react-native';
import Accordion from '@jazebjaved/accordion';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Accordion
        title="Title"
        content={
          <View>
            <Text>Content</Text>
          </View>
        }
      />
    </View>
  );
};

export default App;
```

## Versions

### version 1.0.4 (current)

custom styling for accordion title and content.

### version 1.0.3

Updated deafult styling of accordion.

### version 1.0.2

Updated Readme.md

### version 1.0.1

Added basic accordion functionality.

### version 1.0.0

Initial release of accordion package.
