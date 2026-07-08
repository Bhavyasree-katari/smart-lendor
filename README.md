# 🏦 Smart Lender

## AI-Based Loan Approval Prediction System

### Project Description

Smart Lender is an Artificial Intelligence and Machine Learning based web application that predicts whether a loan applicant is eligible for loan approval. The system analyzes applicant information such as income, education, marital status, employment, loan amount, credit history, and property area using a Machine Learning model. The application provides quick, accurate, and real-time loan approval predictions through a simple and user-friendly web interface.

---

## Objectives

- Predict loan approval using Machine Learning.
- Reduce manual loan verification process.
- Improve decision-making with AI.
- Provide instant prediction through a web application.
- Build a responsive and easy-to-use interface.

---

## Technologies Used

- Python
- Flask
- HTML5
- CSS3
- JavaScript
- Pandas
- NumPy
- Scikit-learn
- Joblib
- VS Code

---

## Machine Learning Algorithm

- Random Forest Classifier

---

## Features

- AI-Based Loan Approval Prediction
- Responsive User Interface
- Real-Time Prediction
- Machine Learning Integration
- Applicant Data Validation
- Fast Prediction
- Mobile-Friendly Design

---

## Input Parameters

- Gender
- Married
- Dependents
- Education
- Self Employed
- Applicant Income
- Co-applicant Income
- Loan Amount
- Loan Amount Term
- Credit History
- Property Area

---

## Output

The application predicts whether the loan will be:

- ✅ Loan Approved
- ❌ Loan Rejected

---

## Project Structure

```
Smart-Lender/
│
├── app.py
├── train_model.py
├── model.pkl
├── loan_prediction.csv
├── requirements.txt
├── README.md
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   ├── index.html
│   └── result.html
│
└── screenshots/
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Smart-Lender.git
```

---

### Create Virtual Environment

```bash
python -m venv venv
```

---

### Activate Virtual Environment

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

---

### Install Required Packages

```bash
pip install -r requirements.txt
```

---

### Train the Model

```bash
python train_model.py
```

This creates:

```
model.pkl
```

---

### Run the Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## Future Enhancements

- XGBoost Integration
- Deep Learning Models
- User Authentication
- Database Integration
- Loan History Management
- Cloud Deployment
- PDF Report Generation
- Email Notifications

---

## Screenshots

- Home Page
- Loan Prediction Form
- Prediction Result

(Add screenshots in the screenshots folder.)

---

## Author

Developed as an Artificial Intelligence and Machine Learning project using Flask and Machine Learning.

---

## License

This project is created for educational purposes only.