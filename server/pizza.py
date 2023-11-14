# routes/pizza.py
from flask import Blueprint, jsonify, request
from . import db
from .models import Pizza

pizza_bp = Blueprint('pizza', __name__)

@pizza_bp.route('/pizzas', methods=['GET'])
def get_pizzas():
    pizzas = Pizza.query.all()
    return jsonify({'pizzas': [{'name': p.name, 'id': p.id} for p in pizzas]})

@pizza_bp.route('/pizzas/<int:pizza_id>', methods=['GET'])
def get_pizza(pizza_id):
    pizza = Pizza.query.get(pizza_id)
    if not pizza:
        return jsonify({'error': 'Pizza not found'}), 404
    return jsonify({'pizza': {'name': pizza.name, 'id': pizza.id}})

@pizza_bp.route('/pizzas', methods=['POST'])
def create_pizza():
    data = request.get_json()
    new_pizza = Pizza(**data)
    db.session.add(new_pizza)
    db.session.commit()
    return jsonify({'message': 'Pizza created successfully', 'id': new_pizza.id}), 201

@pizza_bp.route('/pizzas/<int:pizza_id>', methods=['PUT'])
def update_pizza(pizza_id):
    pizza = Pizza.query.get(pizza_id)
    if not pizza:
        return jsonify({'error': 'Pizza not found'}), 404
    
    data = request.get_json()
    for key, value in data.items():
        setattr(pizza, key, value)

    db.session.commit()
    return jsonify({'message': 'Pizza updated successfully'})

@pizza_bp.route('/pizzas/<int:pizza_id>', methods=['DELETE'])
def delete_pizza(pizza_id):
    pizza = Pizza.query.get(pizza_id)
    if not pizza:
        return jsonify({'error': 'Pizza not found'}), 404
    
    db.session.delete(pizza)
    db.session.commit()
    return jsonify({'message': 'Pizza deleted successfully'})
