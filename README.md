# Loan Calculator App

# [Live Demo](https://loan-calc-phi.vercel.app/)


## 📝 Author

- [Aditya Hongal]
- [adityahongalwork@gmail.com]
- [GitHub Profile](https://github.com/adityahongal)

## About This App

Loan Calculator App is a modern, single-page web application built using **React JS** and **Material UI**. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.

---

## ✨ Features

- **Loan EMI calculation** using standard financial formulas
- **Dynamic amortization schedule** table with monthly breakdown
- **Real-time currency conversion** of EMI using a live exchange rate API
- **Paginated exchange rate table** for 160+ currencies
- **Dark/Light mode toggle** for a customizable experience
- **Collapsible header navigation** on mobile screens
- **404 Not Found** and **Error Boundary** pages for robust UX
- **Fully responsive UI** built with Material UI and Tailwind CSS

---

## 🛠️ Technologies Used

- **React** (Hooks, Routing, Context API)
- **Material UI** for styling and responsive components
- **Tailwind CSS** for utility-first styling and theming
- **Axios** for API calls
- **Exchange Rate API** for real-time currency conversion

---

## 🧮 EMI Formula Used

The EMI (Equated Monthly Installment) is calculated using the standard formula:

EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]


Where:
- **P** = Principal loan amount
- **R** = Monthly interest rate (annual rate / 12 / 100)
- **N** = Loan duration in months

---

## 🌐 Currency Conversion API

This app integrates with the free tier of the [ExchangeRate-API](https://www.exchangerate-api.com/) to fetch live exchange rates.

**API Endpoint Example:**

https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD

#### Note it handles only 1500 API calls per month based on free plan. If you get any error or cannot fetch data consider limit is over

> _You must register and obtain a free API key to use this endpoint._

---

## 🚀 How to Run Locally

1. **Clone the repo:**
git clone https://github.com/adityahongal/loan-calc.git
cd loan-calc

2. **Install dependencies:**
3. **Set your ExchangeRate API key** in the environment/config file.
4. **Run the app:**
5. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📱 Responsive Design

- Fully responsive for all screen sizes
- Collapsible mobile navigation
- Accessible color contrast and theme switching

---

## 🛡️ Error Handling

- **404 Not Found page** for unmatched routes
- **Error Boundary** for runtime errors

---

## 📦 Deployment

The app is deployed on [Vercel](https://vercel.com/).

**Live Demo:** [https://loan-calc-phi.vercel.app/](https://loan-calc-phi.vercel.app/)