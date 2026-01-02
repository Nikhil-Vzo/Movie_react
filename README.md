# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Troubleshooting

### Movie Cards Aligning in a Column Instead of a Row

**Issue:** The `Movie-card` components were rendering vertically in a column, despite the intention to have them in a horizontal row.

**Cause:** The CSS in `src/components/Movie-card.css` had a style rule for the `body` element that set `display: flex` and `flex-direction: column`. This forced all direct children, including the rendered movie cards, into a single column.

**Solution:**
1.  **Container Div:** In `src/Pages/Home.jsx`, the list of `Moviecard` components was wrapped in a container: `<div className="movie-container">`.
2.  **Targeted CSS:** The problematic `body` style was removed from `src/components/Movie-card.css`. It was replaced with a new style for the `.movie-container` class:
    ```css
    .movie-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        padding: 20px;
    }
    ```
This change correctly applies the row-based flexbox layout only to the container of the movie cards, not the entire page body, resolving the alignment issue.
