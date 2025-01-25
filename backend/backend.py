from flask import Flask, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from React

# Database connection
def get_connection():
    DATABASE_URL = "postgresql://postgres:password@localhost:5432/imagedb"  # Replace with your credentials
    return psycopg2.connect(DATABASE_URL)

# Endpoint to fetch artworks
@app.route('/api/artworks', methods=['GET'])
def get_artworks():
    try:
        conn = get_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT id, title, artist, imageurl, style, medium FROM artworks ORDER BY id DESC")
        artworks = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(artworks), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
