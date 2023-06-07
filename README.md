# Next.js Weather Forecast App

Welcome to the Next.js Weather Forecast App! This app allows users to search for a location and retrieve the current weather conditions as well as a five-day forecast. It is built using Next.js 13, Typescript, Redux, and Tailwind CSS.

<!-- link to the figma design -->

Here is the figma design: [Figma Design](https://www.figma.com/file/3ur1CH6BNYKO3cbad0Ikjr/Weather-App---Website-Design---Kelvin-Ng'eno?type=design&node-id=1-7&t=izqfULAwK8NDiFa1-01)

## Key Requirements and Features

- Display current weather conditions for a searched location
- Show a five-day forecast for the searched location
- Support searching for locations by name or coordinates
- Integrate with a weather API to retrieve weather data
- Use Redux for state management
- Implement responsive design using Tailwind CSS

## Getting Started

Follow these steps to set up and run the app locally on your machine.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js v16.17.1

### Installation

1. Clone the repository to your local machine:

`git clone git@github.com:Ngenome/NextJS-Tailwind-Weather-App.git`

2. Navigate to the project's directory:

`cd NextJS-Tailwind-Weather-App`

3. Install the dependencies:

`npm install`

### Configuration

The app requires an API key to autocomplete the location using `google-places-autocomplete-api`. Check if there is a `.env.local` file provided with the app's source code. If not, create a new `.env.local` file in the project's root directory and add the following line:

NEXT_PUBLIC_MAPS_API_KEY=`<your-google-api-key>`

Replace `your-google-api-key` with your actual API key for the weather API you are using.

### Running the App

To start the app locally, run the following command:

`npm run dev`

This command will start the development server and compile the app's assets. Once the server is ready, you can access the app in your web browser at `http://localhost:3000`.

### Building for Production

If you want to build the app for production, use the following command:

`npm run build`

This will create an optimized production build of the app in the `build` or `out` directory.

### Testing

To run the app's tests, use the following command:

`npm run test`

This will execute the test suites and provide the test results.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit an issue or pull request to the repository.

## License

The app is released under the [Apache-2.0 License](LICENSE).
