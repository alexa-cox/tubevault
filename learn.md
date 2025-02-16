## Accessibility

### Role Attribute

The role attribute is a powerful way to enhance the accessibility and semantic meaning of HTML elements.
Adding a role helps screen readers and assistive technologies better understand the purpose and behavior of elements on the page.

## Optimize Prop Order

For ordering put semantic and core functionality props first, followed by styling, then event handlers.

for example the VideoCard li:

- role (semantic meaning first)
- className (if you add one)
- tabIndex (accessibility)
- onClick (primary interaction)
- onKeyDown (secondary interaction)
