import flask, requests
from flask import jsonify, request
import psycopg2
from flask_cors import CORS
import time

app = flask.Flask(__name__)



CORS(app)

@app.route('/saveimage', methods=['POST','GET'])
def save_image():
    data = request.get_json()
    url = data['imageUrl']
    respone = requests.get(url)
    if respone.status_code != 200:
        print("error")
        return jsonify({"status": "error", "message": "Server Error"}), 500
    
    img_data = respone.content

    try:
        conn = psycopg2.connect("dbname=imagedb user=postgres password=password host=localhost")
        cur = conn.cursor()
        cur.execute("INSERT INTO images (image_data) VALUES (%s)", (psycopg2.Binary(img_data),))
        conn.commit()
    except Exception as e:
        print("Database error:", e)
        return jsonify({"status": "error", "message": "Database Error"}), 500

    time.sleep(2)

    return jsonify({"status": "success"})

if __name__ == "__main__":
    app.run(debug=True)