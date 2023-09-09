# Search App

This is an application that uses the Torre API endpoints to search for individuals and then displays matching individuals to the search term entered into the app. The app also enables one to see the last 10 most recent searches as well as add and/or remove favorite matching individuals from the search results. The app is responsive and works well on different screen sizes and devices such as mobile phones and tablets.

## Deliverables

- [The live, production-ready environment.](https://searchi-app.netlify.app/)
- [A version control system.](https://github.com/krys2fa/search-app)

- If I had more time, I would consider the following additional improvements:

  1. Implement notifications/alerts.

     This will greatly enhance the user experience for users when it comes to guidance in the usage of the app or in error handling. This can be done using alerts and modals.

  2. Implement a loading widget.
     This will help in letting the user know when data is being fetched.

  3. Implement accessibility best practices.

     This will make the app much more useful to people with disabilities. This can be done by using semantic HTML and keyboard navigation.

  4. Implement thorough testing (i.e. unit, integration and end-to-end testing).

     This will ensure that bugs are caught way before they make their way to production.

## Requirements

This application was built as part of a technical test with the following requirements:

- Construct a page allowing users to search for names, displaying a list of matching individuals. Take inspiration from **[the torre.ai search](https://torre.ai/search/people-name)**.

- Upon clicking a search result, users should be directed to their genome. This can be either directly on [torre.ai](http://torre.ai/) or through your own implementation.

Additionally, implement **_one or both_** of the following features:

- Display a list showcasing up to 10 of the most recent search queries.
- Provide an option for users to save or favorite individuals and ensure this list is easily accessible.

## Screenshot

![screenshot](./src/images/app.png)

## Built With

- React.
- Redux.
- Create React App.
- Twitter Bootstrap.
- [Torre Genome Information endpoint](https://torre.ai/${result.username}).
- [Torre People Search endpoint](https://torre.ai/api/entities/_searchStream).

## Live App

Click [here](https://searchi-app.netlify.app/) to visit a live version of the web app which has been deployed to Netlify.

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node.
- NPM.
- Javascript.
- React.

### Setup

- Clone the repository by running `https://github.com/krys2fa/search-app.git` in your terminal or command line.
- Change directory (i.e. enter `cd search-app` in your terminal) into the project folder.
- Run `npm install` to install dependencies.
- Run `npm start` to start the development server.
- Visit the URL at http://localhost:3000/ to test the application.

### Testing

To run tests,

- Run `npm test` in the project directory in your terminal or command line.

## Author

👤 **Christopher Amanor**

- Github: [@krys2fa](https://github.com/krys2fa)
- Twitter: [@krys2fa](https://twitter.com/krys2fa)
- Linkedin: [Christopher Amanor](https://www.linkedin.com/in/christopher-amanor/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/krys2fa/tv-show-guide/issues).

## Show your support

Kindly give this repository a ⭐️ if you like this project!

## Acknowledgments

- Project specifications by [Torre](https://www.torre.ai).

## 📝 License

This project is licensed under the MIT License.
