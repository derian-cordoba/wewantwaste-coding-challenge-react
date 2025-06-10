# We want waste - Coding challenge

This project is a coding challenge for the "We want waste" initiative made with React, Vite, TypeScript, and Tailwind CSS. The goal is to create a simple and responsive web application that allows users to report waste in their area.

## Resources

- [Live page](https://velvety-capybara-5a125c.netlify.app/)
- [Figma design](https://www.figma.com/design/hbC87ZiEZase8HAYET6Z9d/We-want-waste---Design?node-id=0-1&t=TQe4fgK04cUX8agi-1)

## Getting Started

### Prerequisites

- Node.js (v22.12.0)
- PNPM (v10.6.5)

### Installation

As first, you need to clone the repository and move into the project directory:

```bash
git clone https://github.com/derian-cordoba/wewantwaste-coding-challenge-react

cd wewantwaste-coding-challenge-react
```

Then, install the dependencies using PNPM:

```bash
pnpm install
```

### Running the Application

To run the application in development mode, use the following command:

```bash
pnpm dev
```

## Architecture

For this coding-challenge, I have used the modular architecture, which allows for better organization and scalability of the codebase. The main directories are:

```bash
.
├── public
│   └── locales
│       └── en
└── src
    ├── modules
    │   ├── app
    │   │   ├── hooks
    │   │   └── utils
    │   └── select-skip
    │       ├── config
    │       │   └── defaults
    │       ├── hooks
    │       ├── pages
    │       │   └── components
    │       ├── services
    │       ├── types
    │       └── utils
    └── shared
        ├── components
        │   ├── Layouts
        │   ├── Loading
        │   └── ui
        ├── config
        │   └── api
        ├── resources
        │   └── styles
        │       └── themes
        ├── services
        │   └── networking
        │       ├── clients
        │       ├── contracts
        │       └── mocks
        │           └── skips
        ├── types
        └── utils
            ├── localization
            └── tailwind
```

### Modules

- **app**: Contains hooks and utilities for the application.
- **select-skip**: Contains the main logic for the skip selection feature, including configuration, hooks, pages, services, types, and utilities.
- **shared**: Contains shared components, configuration, resources, services, types, and utilities.

### Shared Components

- **Layouts**: Contains layout components for the application.
- **Loading**: Contains loading components for the application.
- **ui**: Contains reusable UI components (from Shadcn/ui).
- **config**: Contains configuration files for the application.
- **resources**: Contains styles and themes for the application.
- **services**: Contains networking services, including clients, contracts, and mocks.
- **types**: Contains TypeScript types for the application.
- **utils**: Contains utility functions for localization and Tailwind CSS.

### Localization

The application uses `react-i18next` for localization. The translation files are located in the `public/locales/en` directory. As mentioned in the code, I am only using the English language, but we can easily add more languages.

### Observations

- The application is designed to be responsive and works well on both desktop and mobile devices.
- The code is organized in a modular way, making it easy to maintain and extend.
- The application uses Tailwind CSS for styling, which allows for rapid development and easy customization.

## Testing

For this coding challenge, I have not included unit tests or end-to-end tests. However, it is recommended to add tests to ensure the reliability and maintainability of the codebase.

When I add tests, I usually use testing libraries such as Jest or Vitest for unit testing and Cypress, Selenium, or Playwright for end-to-end testing.
