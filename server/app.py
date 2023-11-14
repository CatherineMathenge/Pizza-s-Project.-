# server/app.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)

# Configuration for your database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'  # Replace with your actual database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configuration for JWT
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Replace with a strong, unique key
jwt = JWTManager(app)

# Enable CORS for all routes
CORS(app)

# Initialize the SQLAlchemy database
db = SQLAlchemy(app)

# Import your models and routes
from server.models import Restaurant, Pizza  # Adjust the import path
from server.routes import restaurant_routes, pizza_routes  # Adjust the import path

# Register blueprints for routes
app.register_blueprint(restaurant_routes, url_prefix='/api/restaurant')
app.register_blueprint(pizza_routes, url_prefix='/api/pizza')

if __name__ == '__main__':
    # Run the application
    app.run(debug=True)
