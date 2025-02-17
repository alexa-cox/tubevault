# Lessons learned from this project

## Phase One Summary

In Phase 1, we transformed a vanilla JavaScript project into a well-structured React application with professional-grade architecture. We established a robust foundation by implementing proper routing with React Router, creating a maintainable component hierarchy, and developing a sophisticated CSS architecture.

The CSS system now follows modern best practices with a variables-first approach, separating concerns between base styles, components, and utilities. This improves upon the original project by making styles more maintainable, reusable, and easier to scale. The implementation of CSS custom properties (variables) provides consistent theming and better design system management.

**Key learning points included:**

1. Barrel files for clean imports and exports
2. Single responsibility principle in CSS organization
3. Conventional commits for clear version control
4. Breaking changes management in git workflow
5. CSS architecture patterns and file organization
6. Component hierarchy and proper routing structure

**Your understanding of these concepts has notably improved, particularly in:**

- Git workflow and commit messages
- CSS organization and variable management
- File structure best practices
- Component-based architecture
- Import/export patterns

## Additional Lessons

### Accessibility

#### Role Attribute

The role attribute is a powerful way to enhance the accessibility and semantic meaning of HTML elements.
Adding a role helps screen readers and assistive technologies better understand the purpose and behavior of elements on the page.

### Optimize Prop Order

For ordering put semantic and core functionality props first, followed by styling, then event handlers.

for example the VideoCard li:

- role (semantic meaning first)
- className (if you add one)
- tabIndex (accessibility)
- onClick (primary interaction)
- onKeyDown (secondary interaction)
