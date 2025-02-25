

# Pescadería Carenero


![Portada](https://raw.githubusercontent.com/dario-chic/carenero-pescaderia/refs/heads/main/banner.webp)
![Badge](https://img.shields.io/badge/Status-Finished-brightgreen)
![Badge](https://img.shields.io/badge/License-MIT-blue)
## Table of contents

- [Description](#description)
- [Main features](#main-features)
- [Tech Stack](#tech-stack)
- [How to use](#how-to-use)
- [Live demo](#live-demo)
- [Contribution](#contribution)
- [License](#license)

  
## Description
**Pescadería Carenero**  is an e-commerce website designed for a local seafood company specializing in artisanal marine products. The platform allows customers to browse, select, and purchase products seamlessly. It features a shopping cart managed with  **Redux**, a user-friendly checkout flow, and integration with the  **WhatsApp API**  for order confirmation.

_💡 This project represents one of my early experiences with  **Redux**  and complex user flows. While it’s not perfect, it was a crucial step in my journey as a developer, teaching me valuable lessons about state management, UI/UX design, and integrating third-party services._

## Main Features


### Global State Management

The website uses  **Redux**  to manage the global state, particularly for the shopping cart. This ensures a seamless and consistent user experience across the application.

### Shopping Cart

Users can add, edit, and remove products from their cart and product cards. The state is preserved throughout the user's session, allowing for a smooth shopping experience.

### Checkout Flow

The checkout process includes:

-   A review page where users can confirm their order and make last-minute changes.
    
-   A form to enter personal and delivery information.
    
-   Integration with the  **WhatsApp API**  to automatically generate a message with the order details, which is sent directly to the company for processing.
    

### Product Search and Filtering

Users can easily search for products and apply filters to find exactly what they're looking for.

## Tech Stack

-   **Frontend:**
    -   [Next.js](https://nextjs.org/)  (Framework)
    -   [React](https://reactjs.org/)  (Library)
    -   [Sass](https://sass-lang.com/)  (Styling)
    -   [Redux](https://redux.js.org/)  (State Management)
        
-   **Deployment:**
    -   [Vercel](https://vercel.com/)  (Hosting)

## How to use
1. Clone the repository:
   ```bash
   git clone https://github.com/dario-chic/carenero-pescaderia.git
   ```
2. Navigate to the project folder:
   ```bash
   cd carenero-pescaderia
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
	 ```bash
   npm run dev
   ```

## Live Demo

[See live demo](https://carenero-pescaderia.vercel.app/)

## Contribution


Contributions are welcome! If you have ideas to improve this project, find a bug, or simply want to add a new feature, feel free to open an issue or submit a pull request. Thank you for your interest in contributing!

1. Fork the project.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License 📜
Distributed under the [MIT License](https://opensource.org/licenses/MIT). See LICENSE.txt for more information.

---

Made with ❤️ by [Dario Chic](https://github.com/dario-chic)  
📧 Contact me: [contact@dariochic.dev](mailto:contact@dariochic.dev)  
🔗 [LinkedIn](https://www.linkedin.com/in/dariochic/) | [Portfolio](https://dariochic.dev)
