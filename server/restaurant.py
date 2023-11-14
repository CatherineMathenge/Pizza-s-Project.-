# routes/restaurant.py
from flask import Blueprint, jsonify, request
from . import db
from .models import Restaurant

restaurant_bp = Blueprint('restaurant', __name__)

@restaurant_bp.route('/restaurants', methods=['GET'])
def get_restaurants():
    restaurants = Restaurant.query.all()
    return jsonify({'restaurants': [{'name': r.name, 'id': r.id} for r in restaurants]})

@restaurant_bp.route('/restaurants/<int:restaurant_id>', methods=['GET'])
def get_restaurant(restaurant_id):
    restaurant = Restaurant.query.get(restaurant_id)
    if not restaurant:
        return jsonify({'error': 'Restaurant not found'}), 404
    return jsonify({'restaurant': {'name': restaurant.name, 'id': restaurant.id}})

@restaurant_bp.route('/restaurants', methods=['POST'])
def create_restaurant():
    data = request.get_json()
    new_restaurant = Restaurant(**data)
    db.session.add(new_restaurant)
    db.session.commit()
    return jsonify({'message': 'Restaurant created successfully', 'id': new_restaurant.id}), 201

@restaurant_bp.route('/restaurants/<int:restaurant_id>', methods=['PUT'])
def update_restaurant(restaurant_id):
    restaurant = Restaurant.query.get(restaurant_id)
    if not restaurant:
        return jsonify({'error': 'Restaurant not found'}), 404
    
    data = request.get_json()
    for key, value in data.items():
        setattr(restaurant, key, value)

    db.session.commit()
    return jsonify({'message': 'Restaurant updated successfully'})

@restaurant_bp.route('/restaurants/<int:restaurant_id>', methods=['DELETE'])
def delete_restaurant(restaurant_id):
    restaurant = Restaurant.query.get(restaurant_id)
    if not restaurant:
        return jsonify({'error': 'Restaurant not found'}), 404
    
    db.session.delete(restaurant)
    db.session.commit()
    return jsonify({'message': 'Restaurant deleted successfully'})
