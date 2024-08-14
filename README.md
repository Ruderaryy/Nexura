# Nexura

Nexura is a React-based web application for managing a stock watchlist and placing buy orders. The application features real-time updates on stock prices, a customizable watchlist, and an interactive chart to visualize stock data.

## Features

- **Stock Watchlist**: View and manage a list of stocks with details such as price, percentage change, and trend indicators.
- **Interactive Chart**: Visualize stock data using a doughnut chart.
- **Buy Action Window**: Place buy orders with adjustable quantities and prices.
- **Contextual Actions**: Perform actions like buying, selling, and viewing analytics on individual stocks.

## Technologies Used

- React
- React Router
- Material-UI
- Axios
- Chart.js (for the Doughnut Chart, Vertical Graph chart)

![image](https://github.com/user-attachments/assets/1c1a9224-904e-4f39-a2df-1d76d873b3f1)

![image](https://github.com/user-attachments/assets/578b1431-4cef-4dcd-9a5a-e1b42cd352ae)

![image](https://github.com/user-attachments/assets/cf9a8f48-e2ee-4a14-b211-c5b9653cb416)

![image](https://github.com/user-attachments/assets/b31db4e9-682f-43f6-9123-f60a9b4e225a)

## Install Dependencies

npm install

## Start the Development Server

npm start

## Usage

### 1. **Viewing and Managing Your Stock Watchlist**

- **Navigate to the Main Page**: After starting the application, you’ll land on the main page where your stock watchlist is displayed.
- **Search Stocks**: Use the search bar at the top of the watchlist to filter stocks by name. Enter keywords like "infy" or "gold mcx" to find specific stocks.
- **View Stock Details**: Each stock item shows its name, percentage change, price, and an indicator of whether the stock is going up or down.

### 2. **Interacting with Stock Items**

- **Hover to Reveal Actions**: Hover over a stock item to reveal action buttons for buying, selling, or viewing analytics.
- **Buy Stock**: Click the "Buy" button to open the buy action window where you can specify the quantity and price for your order.

### 3. **Placing a Buy Order**

- **Open Buy Action Window**: Clicking the "Buy" button will open a pop-up window where you can enter the quantity and price for the stock you want to purchase.
- **Enter Quantity and Price**:
  - **Quantity**: Enter the number of shares you wish to buy.
  - **Price**: Enter the price per share.
- **Calculate Margin**: The margin required will be automatically calculated based on the quantity and price you input.
- **Place Order**: Click the "Buy" button in the pop-up to place your order. The application will send the order to the backend for processing.
- **Cancel Order**: Click the "Cancel" button to close the buy action window without placing an order.

### 4. **Visualizing Stock Data**

- **View Doughnut Chart**: At the bottom of the watchlist, a doughnut chart provides a visual representation of the stock prices in your watchlist.
- **Interact with Chart**: Hover over or click on the chart segments to see more details about each stock.
