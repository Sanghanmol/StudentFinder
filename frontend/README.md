# Student Search Application

This is a simple React-based application that allows users to search for students, view search results, and view detailed information about a selected student.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used])
- [Installation](#installation)
- [Usage](#usage)

## Overview

This project implements a single-page application (SPA) with a search bar that features lazy loading and displays student data. It includes a frontend built with React.js and a backend API built using Express.js that serves the student data from a local JSON file.

## Features

- Student Search: Allows the user to search for students by name. Results are displayed dynamically as the user types in the search bar.
- Student Details: Once a student is selected from the search results, detailed information about the student is shown in a beautifully styled card.
- Debounced Search: The search results are fetched with a debounce of 300ms to reduce unnecessary API calls.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Mantine: A modern component library for React with a focus on usability and performance.
- Node.js: Used with Express.js to serve the API.
- Axios: Promise-based HTTP client to make API requests.
- Lodash: A utility library used for debouncing the search input.
- PropTypes: Runtime type-checking for props.

## Installation

To run locally, follow these steps:

1. Clone the repository:
https://github.com/Sanghanmol/StudentFinder

2. Install dependencies:
npm install

3. Start the backend and frontend server:
npm run dev

4. Open the application in your web browser:
The backend will be available at http://localhost:5000

## Usage

- Enter a student's name in the search bar at the top of the page.
- The search results will be shown below as you type, with relevant student names highlighted.
- Click on a student from the results to view their details (e.g., class and roll number).
