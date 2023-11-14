# routes/auth.py
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from . import db
from .models import Restaurant

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    restaurant = Restaurant.query.filter_by(email=email, password=password).first()

    if restaurant:
        access_token = create_access_token(identity=restaurant.id)
        return jsonify(access_token=access_token)
    else:
        return jsonify({'error': 'Invalid credentials'}), 401

@auth_bp.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user_id = get_jwt_identity()
    return jsonify(logged_in_as=current_user_id), 200
