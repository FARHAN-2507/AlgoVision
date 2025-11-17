# **App Name**: AlgoVision

## Core Features:

- Algorithm Selection: Allow users to select from a predefined list of algorithms (sorting, searching, graph algorithms).
- Language Selection: Allow users to select a programming language (JavaScript, Python).
- Code Editor Integration: Integrate Monaco Editor for code editing with syntax highlighting.
- Safe Code Execution: Execute the selected algorithm's code in a secure environment using Web Workers (JavaScript) and Pyodide (Python).
- Visualization Engine: Animate the algorithm's execution using visual elements, arrays, trees, graph traversal using React + D3. User controls for stepping, speed, play, and pause will adjust the tempo.
- Execution Event Instrumentation: Instrument the code execution to log key events (comparisons, swaps, variable assignments) with step ID, type, data, and source code line.
- Data Persistence: Store and load saved code snippets and visualizations in Firestore.

## Style Guidelines:

- Primary color: Deep blue (#3F51B5) to convey intelligence, reliability, and focus.
- Background color: Very light gray (#F5F5F5), close in hue to the primary color but greatly desaturated.
- Accent color: Purple (#9C27B0) to highlight interactive elements and CTAs.
- Headline font: 'Space Grotesk' sans-serif font for headers to convey a techy, scientific feel; use 'Inter' for body text
- Code font: 'Source Code Pro' for displaying code snippets.
- Use clear and modern icons to represent algorithms and control actions.
- Divide the screen into distinct sections for code editor, visualization canvas, and step-by-step controls.
- Smooth transitions and animations to visualize algorithm steps.