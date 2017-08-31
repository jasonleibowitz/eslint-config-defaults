# eslint-config-defaults
Shareable ESLint Configs. Heavily inspired by [Colby Dauphinais](https://github.com/colbydauph) and [Airbnb](https://github.com/airbnb/javascript).

<details>
<summary>React Rules</summary>
#### Basic Rules
* Only include one React component per file [[rule]](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md).
* Always use JSX syntax.

#### Class vs `React.createClass` vs stateless
* If you have internal state and/or refs prefer `class extends React.Component` or `class extends React.PureComponent` over `createReactClass`.

rules: [react/prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) and [react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

#### Naming
* Extensions: use `.jsx` extension for React components
* Filename: Use PascalCase for filenames, e.g. `ReservationCard.jsx`
* Reference Naming: Use PascalCase for React components and camelCase for their instances.

rules: [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```jsx
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

#### Alignment
* Follow these alignment styles for JSX syntax.
  * JSX should have 2 spaces indentation
  * Props should have 2 spaces indentation

rules: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) and [react/jsx-closing-tag-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md) and [jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md) and [react/jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md)

```jsx
// bad
<Foo  superLongParam="bar"
      anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if props fit in one line then keep it on the same line
<Foo bar="bar" />

// children get indented normally
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>

```


#### Spacing
* Always include a single space before a self-closing tag, and no spaces after opening tags or closing slashes

```jsx
// bad
<App/ >
<App/>
< App/ >

// good
<App />
```

* Do not include multiple spaces in a row that are not used for indentation. These are usually mistakes.

```jsx
// bad
if(foo   === "bar") {}

// good
if(foo === "bar") {}
```

rule: [react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md) and [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)

* [When to Override](https://github.com/yannickcr/eslint-plugin-react/issues/1123)

* Do not include spaces between curly braces in JSX and do not include extra spaces in object literals. eslint [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

```jsx
// bad jsx
<Hello name={ name } />
<Hello name={ name} />
<Hello name={name } />

// good jsx
<Hello name={name} />

// bad object literal
<Hello name={name} foo={ {bar: true, baz: true} } />

// good object literal
<Hello name={name} foo={{ bar: true, baz: true }} />
```

* Disallow spaces around equals signs in JSX. eslint: [react/jsx-equals-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)

```jsx
// bad
<Hello name = {name} />
<Hello name= {name} />
<Hello name ={name} />

// good
<Hello name={name} />
```

#### Props
* Always include defaultProps for any prop that is not required. eslint: [react/require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)

> Why? propTypes are a form of documentation, and providing defaultProps means the render of your code doesn't have to assume as much. In addition, it can mean that your code can omit certain type checks.

* Always include the value of the props when it is explicitly true. eslint: [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

```jsx
// bad
<Foo hidden />

// good
<Foo hidden={true} />
```

* Always include an alt prop on `<img>` tags. If the image is presentational, `alt` can be an empty string or the `<img>` must have `role=presentational`. eslint: [jsx-a11y/alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

```jsx
// bad
<img src="hello.js" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```

* Do not use `PropTypes.any`, `PropTypes.array`, or `PropTypes.object`. Prefer specificity of definition. eslint: [react/forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)

```jsx
// bad
static propTypes = {
  a: PropTypes.any,
  b: PropTypes.array,
  c: PropTypes.object,
}

// good
static propTypes = {
  a: PropTypes.number,
  b: PropTypes.arrayOf(
    PropTypes.string,
  ),
  c: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  })
}

```

* Avoid using an array index as `key` prop, prefer a unique id ([Why?](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

> The key is used by React to identify which items have changed, are added, or are removed and should be stable. It is a bad idea to use the array index as your key since it doesn't uniquely identify your elments. In cases where the array is sorted or an element is added to the beginning of the array, the index will be changed even though th element representing that index may be the same. This results in unecessary renders. eslint: [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

You can disable this rule when there is nothing unique about the items, for example, you are [breaking an array down into chunks](https://github.com/yannickcr/eslint-plugin-react/issues/1123).

```jsx
// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => {
  <Todo
    {...todo}
    key={todo.id}
  />
})}
```

* Don't forget a key property if it is required, namely for array literals or arrow function expressions. eslint: [react/jsx-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md)

* Prevent missing props validation in a React component definition. eslint: [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

> Why? PropTypes improve the reusability of your component by validating the received data. It can warn other developers if they make a mistake while reusing the component with improper data.

```jsx
// bad
class Hello extends PureComponent {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// good
class Hello extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  }

  render() {
    return <div>Hello {this.props.name}</div>
  }
}
```

* Enforce propType declarations to be sorted in alphabetical order. This makes it easier to find the necessary declarations. eslint: [react/sort-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md)

```jsx
// bad
static propTypes = {
  z: PropTypes.string,
  c: PropTypes.string,
  a: PropTypes.string,
}

// good
static propTypes = {
  a: PropTypes.string,
  b: PropTypes.string,
  z: PropTypes.string,
}
```

* Do not put more than 1 prop on a line if the JSX element spans multiple lines. eslint: [jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md)

* Do not duplicate prop definitions. eslint: [react/jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)

```jsx
// bad
<Hello name="John" name="Doe" />

// good
<Hello firstName="John" lastName="Doe" />
```

#### Refs
* Always use ref.callbacks. eslint: [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

> Providing a string identifier as a ref is [considered legacy](https://facebook.github.io/react/docs/refs-and-the-dom.html#legacy-api-string-refs) by the official documentation.

```jsx
// bad
<Foo ref="myRef" />

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```

#### Parentheses
* Wrap JSX tags in parentheses when they span more than one line. eslint: [react/jsx-wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

```jsx
// bad
render() {
  return  <MyComponent className="long body" foo="bar">
            <MyChild />
          </MyComponent>;
}

// good
render() {
  return (
    <MyComponent className="long body" foo="bar">
      <MyChild />
    </MyComponent>;
  );
}

// good when one line
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

#### Tags
* Always self-close tags that have no children. eslint: [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

```jsx
// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />
```

* If your component has multi-line properties, close its tag on a new line. eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

#### Methods

* Bind event handlers for the render method in the constructor. eslint: [react/jsx-no-bind](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

> Why? A bind call in the render path creates a brand new function on every render.

```jsx
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```

* Be sure to return a value in your `render` methods. eslint: [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

```jsx
// bad
render() {
  (<div />)
}

// good
render() {
  return <div />;
}
```

#### Ordering

* Ordering for `class extends Component`. eslint: [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

1. optional `static` methods
1. `constructor`
1. `getChildContext`
1. 1componentWillMount1
1. `componentDidMount`
1. `componentWillReceiveProps`
1. `shouldComponentUpdate`
1. `componentWillUpdate`
1. `componentDidUpdate`
1. `componentWillUnmount`
1. clickHandlers or eventHandlers, like `onClickSubmit()` or `onChangeDescription()`
1. getter methods for `render`, like `getSelectReason()` or `getFooterContent()`
1. optional render methods like `renderNavigation()` or `renderProfilePicture()`
1. `render`

#### `isMounted`
* Do not use `isMounted`. eslint: [react/no-is-mounted](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

> Why? [isMounted is an anti-pattern](https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html), is not available when using ES6 classes, and is on its way to being officially deprecated.

#### Prevent Usage of Deprecated Methods
Several methods are deprecated between React versions. eslint: [react/no-deprecated](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)

The following methods are considered deprecated:

```jsx
React.render(<MyComponent />, root);
React.unmountComponentAtNode(root);
React.findDomNode(this.refs.foo);
React.renderToString(<MyComponent />);
React.renderToStaticMarkup(<MyComponent />);
React.createClass({ /* Class object */ });
const propTypes = {
  foo: PropTypes.bar
};

import React, { PropTypes } from react;
```

#### Lifecycle Methods
* Prevent use of `setState` in `componentDidMount` or `componentDidUpdate`. eslint: [react/no-did-mount-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md) and [react/no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md)

> Why? Updating the state after the component mount will trigger a second `render()` call and lead to property/layout thrashing.

#### State
* Never mutate `this.state` directly, as calling `setState()` afterwards may replace the mutations you made. Treat `this.state` as if it were immutable. The only place that's acceptable to assign this.state is in a ES6 `class` component constructor. eslint: [react/no-direct-mutation-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md)

```jsx
// bad
this.state.name = this.props.name.toUpperCase();

// good
this.setState({
  name: this.props.name.toUpperCase();
});
```

#### JSX Rules
* Files with JSX must end in `.jsx`. eslint: [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

```jsx
// bad
// filename: MyComponent.js
function MyComponent() {
  return <div />;
}

// good
// filename MyComponent.jsx
function MyComponent() {
  return <div />;
}
```

* If the JSX tag takes up multiple lines, the first prop should be places on a new line. eslin: [react/jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)

```jsx
// bad
<Hello personal={true}
  foo="bar"
/>
<Hello foo={{

}} />

// good
<Hello personal={true} />
<Hello
  personal={true}
  foo="bar"
/>
```

* Ensure that all component prop methods used to handle events are named correctly. The method's prop should be onEvent and the handler should be handleEvent. eslint: [react/jsx-handler-names](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md)

```jsx
// bad
<MyComponent handleChange={this.handleChange} />
<MyComponent onChange={this.componentChanged} />

// good
<MyComponent onChange={this.handleChange} />
<MyComponent onChange={this.props.onFoo} />
```

#### Misc
* Prevent usage of unknown DOM properties. In JSX all DOM properties and attributes should be camelCased to be consistent with standard JavaScript style. This can be a possible source of errors. eslint [react/no-unknown-property](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

```jsx
import React from 'react';
// bad
const Hello = <div class="hello">Hello World</div>

// good
const Hello = <div className="hello">Hello World</div>
```

* Prevent missing React when using JSX. When using JSX, `<a />` expands to `React.createElement("a")`. Therefore the `React` variable must be in scope. If you are using JSX this rule will check the designated variable and not the `React` one. eslint: [react/react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

```jsx
// bad
const Hello = <div>Hello {this.props.name}</div>;

// good
import React from 'react';
const Hello = <div>Hello {this.props.name}</div>;
```

* Prevent usage of unsafe `target=_blank`. Using this without `noreferrer noopener` is a [security vulnerability](https://mathiasbynens.github.io/rel-noopener).eslint: [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)

```jsx
// bad
const Hello = <a target="_blank" href="http://example.com" />

// good
const Hello = <p target="_blank" /></p>
const Hello = <a target="_blank" rel="noopener noreferrer" href="http://example.com" />
const Hello = <a target="_blank" href="relative/path/in/the/host" />
const Hello = <a target="_blank" href="/absolute/path/in/the/host" />
```

* Do not use string literals in JSX. This prevents any odd artifacts of highlighters if your unwrapped string contains an enclosing character like `'` in contradictions and enforces consistency. eslint: [react/jsx-no-literals](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md)
```jsx
// bad
const Hello = <div>Hello</div>;

// good
const Hello = <div>{"Hello"}</div>;
```
</details>