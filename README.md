# Technical Review
This repository contemplates the requested requirements of the test.
Responsive design was applied to adapt to any device.

Technologies Used
    -React
    -React Hooks
    -Redux
    -Reach Router
    -Styled Component
    -Material UI
    -PropTypes

Web application containing the following 2 pages
    - Line Graphs
    - Posts


## Installation
install the necessary modules:

```bash
npm install
```

## Getting Started
run the development server:

```bash
npm run dev
```

## How to use
Line Graph: CSV text is entered and then processed. 
Example:
```bash
date, amount, spent
2019-01-01, 15, 100
2019-01-02, 22, 200
2019-01-03, 38, 300
2019-01-04, 49.4, 400
```

    Then the options for all the columns will be enabled, the combos cannot have the same column equally will filter the second as the available options, Make sure the AXIS X combo has a dimension and the Y combo has a measure. Apply
    The graph will be drawn according to the options chosen

Posts: 100 posts will be displayed in a grid, Click on User or on ID, a second grid will be enabled with the details of the selected cell.

