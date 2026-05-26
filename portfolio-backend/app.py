from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

portfolio = {
    "name": "Taji Filbert",
    "about": "Data scientist specialized in analytics, visualization and insights.",
    "skills": ["R Programming Language", "Python Programming", "Excel", "Power BI"],
    "qualifications": ["BSc in Computer Science", "Data Analysis & Visualization"],
    "projects": [
        {"name": "Business Visualization Dashboard", "desc": "Interactive dashboard using Power BI"},
        {"name": "Data Analysis Project 01", "desc": "Exploratory analysis with Python & R"},
        {"name": "Data Cleaning with Python", "desc": "Automated cleaning pipeline for raw datasets"}
    ],
    "contact": {
        "phone": "+255680832873 / +25516290052 (WhatsApp)",
        "email": "tajinhokikoti16@gmail.com"
    }
}

@app.route("/api/portfolio", methods=["GET"])
def get_portfolio():
    return jsonify(portfolio)

if __name__ == "__main__":
    app.run(debug=True)
