# useRef

- useRef is react hooks that allow us to create **mutable variable**, which will **not re-render** the component.
- used in accessing & modifying the DOM elements.

## why do we need useRef :

- let's assume we have a normal JS variable, which hold some value. and we have a button to increase the count of x from 10 to 15;
  example :

```js
let x = 10;
```

- Now let' assume we have a state variable, now whenever the state variable changes, the component re-renders. and we lost the value of `x`. It again start from 10, so to avoid it we use useRef

### usage :

```js
const ref = useRef(initialValue);
```

example:

```js
const ref = useRef(10);
```

- we can't access the value of `x` directly, becasue it returns an object with a `current` property.
- To get the value : `ref.current`
