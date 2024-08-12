Sure! Here’s a `README.md` file for your BMI roasting application:

```markdown
# BMI Roast Application

This is a playful and fun application that provides comical roasting based on a user's BMI. It is built using Next.js for the frontend and uses Gemini AI for generating the roast content.

## Features

- User input for name, weight, height, and gender
- Generation of playful roast messages based on user input
- Calculation and display of BMI and its category
- Responsive design for seamless use across devices

## Technology Stack

- **Frontend**: Next.js, React
- **Backend**: Next.js API Routes
- **AI Integration**: Gemini AI

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rafai123/AI-BMI-Roast
    ```

2. Navigate to the project directory:

    ```bash
    cd AI-BMI-Roast
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Fill in your name, weight, height, and gender in the form and submit to receive a playful roast based on your BMI.

## Project Structure

- `pages/api/geminiBackend.js`: Handles API requests and communicates with Gemini AI.
- `components/PromptBox.jsx`: Handles user input and displays the generated roast message.

## Example Request

The backend receives a POST request with the following data structure:

```json
{
  "name": "Rafai",
  "weight": "45kg",
  "height": "170cm",
  "gender": "Laki-Laki"
}
```

The backend then sends a prompt to Gemini AI and returns the generated roast message.

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or have new features to propose.


©2024 Created playfully by Rafai.
```
