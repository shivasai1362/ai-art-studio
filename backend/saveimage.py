import flask, requests
from flask import jsonify, request
import psycopg2
from flask_cors import CORS
import time
import base64

app = flask.Flask(__name__)
CORS(app)

host = "dbname=imagedb user=postgres password=password host=localhost"


@app.route('/getimages', methods=['GET'])
def get_images():
    try:
        conn = psycopg2.connect(host)
        cur = conn.cursor()
        cur.execute("SELECT * FROM images")
        images = cur.fetchall()
        
        
        imageData = []
        for (id, imageBin) in images:
            image = base64.b64encode(imageBin).decode("utf-8")
            imageData.append({"id":id, "image": image})
        
        conn.close()
        cur.close()
        return jsonify(imageData)
            
    except Exception as e:
        print("Database connection error:", e)
        return jsonify({"status": "error", "message": "Database Connection Error"}), 500


@app.route('/saveimage', methods=['POST'])
def save_image():   
    data = request.get_json()
    url = data['imageUrl']
    respone = requests.get(url)
    if respone.status_code != 200:
        print("error")
        return jsonify({"status": "error", "message": "Server Error"}), 500
    
    img_data = respone.content

    try:
        conn = psycopg2.connect(host)
        cur = conn.cursor()
        cur.execute("INSERT INTO images (image_data) VALUES (%s)", (psycopg2.Binary(img_data),))
        conn.commit()
        cur.close()
        conn.close()

    except Exception as e:
        print("Database error:", e)
        return jsonify({"status": "error", "message": "Database Error"}), 500


    return jsonify({"status": "success"})

@app.route('/deleteimage/<int:idx>', methods=['DELETE'])
def delete_image(idx):
    try:
        conn = psycopg2.connect(host)
        curr = conn.cursor()
        curr.execute("DELETE FROM images WHERE id = %s", (idx,))
        conn.commit()
        curr.close()
        conn.close()
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
    time.sleep(0.6)
    return jsonify({"message":"Success", "id":idx}), 200


if __name__ == "__main__":
    app.run(debug=True)
