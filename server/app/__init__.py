# server/app/__init__.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_jwt_extended import JWTManager

# Initialize Flask application
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

# Register blueprints for routes
from routes import auth_bp, pizza_bp  # Adjust the import path
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(pizza_bp, url_prefix='/api/pizza')

if __name__ == '__main__':
    # Run the application
    app.run(debug=True)
