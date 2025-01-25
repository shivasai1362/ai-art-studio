import streamlit as st
import psycopg2
from psycopg2.extras import RealDictCursor
import json


# Database connection
def get_connection():
    DATABASE_URL = "postgresql://postgres:password@localhost:5432/imagedb"
    return psycopg2.connect(DATABASE_URL)

# Insert data into PostgreSQL
def insert_artwork(title, artist, imageUrl, style, medium):
    try:
        conn = get_connection()
        cursor = conn.cursor()
        query = """
        INSERT INTO artworks (title, artist, imageUrl, style, medium)
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (title, artist, imageUrl, style, medium))
        conn.commit()
        cursor.close()
        conn.close()
        return True
    except Exception as e:
        st.error(f"Error inserting data: {e}")
        return False

# Streamlit UI
st.title("Admin Panel: Add New Artwork")

# Artwork Form
with st.form("artwork_form"):
    title = st.text_input("Artwork Title")
    artist = st.text_input("Artist Name")
    imageUrl = st.text_input("Image URL")
    
    # Art Style Dropdown
    style_options = {
        "All Styles": "all",
        "Contemporary": "contemporary",
        "Abstract": "abstract",
        "Impressionism": "impressionism",
        "Realism": "realism",
        "Surrealism": "surrealism",
        "Minimalism": "minimalism",
        "Pop Art": "pop-art",
        "Expressionism": "expressionism",
        "Conceptual": "conceptual",
        "Street Art": "street-art"
    }
    style = st.selectbox("Art Style (e.g., Abstract, Impressionism, etc.)", options=list(style_options.keys()))
    style_value = style_options[style]  # Get the value for the selected label

    # Medium Dropdown
    medium_options = {
        "All Types": "all",
        "Oil Painting": "oil-painting",
        "Watercolor": "watercolor",
        "Digital Art": "digital-art",
        "Photography": "photography",
        "Sculpture": "sculpture",
        "Mixed Media": "mixed-media",
        "Illustration": "illustration",
        "Pencil Drawing": "pencil-drawing",
        "Acrylic Painting": "acrylic",
        "Collage": "collage"
    }
    medium = st.selectbox("Medium (e.g., Oil Painting, Digital Art, etc.)", options=list(medium_options.keys()))
    medium_value = medium_options[medium]  # Get the value for the selected label

    # Submit button
    submitted = st.form_submit_button("Add Artwork")
    if submitted:
        if title and artist and imageUrl and style_value and medium_value:
            success = insert_artwork(title, artist, imageUrl, style_value, medium_value)
            if success:
                st.success("Artwork added successfully!")
        else:
            st.warning("Please fill out all fields.")

# Delete Artwork Form
with st.form("delete_artwork_form"):
    delete_id = st.text_input("Artwork ID to Delete")
    delete_button = st.form_submit_button(label="Delete Artwork")
    if delete_button:
        conn = get_connection()
        cursor = conn.cursor()
        query = f"""
            DELETE FROM artworks WHERE ID = {delete_id}
        """
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

# Display existing artworks
st.subheader("Existing Artworks")
try:
    conn = get_connection()
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    cursor.execute("SELECT id, title, artist, imageurl, style, medium FROM artworks ORDER BY id DESC")
    artworks = cursor.fetchall()
    cursor.close()
    conn.close()

    for artwork in artworks:
        st.write(f"**ID**: {artwork['id']} | **Title**: {artwork['title']} | **Artist**: {artwork['artist']} | **Style**: {artwork['style']} | **Medium**: {artwork['medium']}")
except Exception as e:
    st.error(f"Error fetching artworks: {e}")

if st.button("Extract as JS Array"):
    js_array = [
        {
            "id": artwork['id'],
            "title": artwork['title'],
            "artist": artwork['artist'],
            "imageurl": artwork['imageurl'],
            "style": artwork['style'],
            "medium": artwork['medium']
        } for artwork in artworks
    ]
    st.code(f"const mockArtWorks = {js_array};", language="javascript")

if st.button("Extract as JSON"):
    try:
        conn = get_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT id, title, artist, imageurl, style, medium FROM artworks ORDER BY id DESC")
        artworks = cursor.fetchall()
        cursor.close()
        conn.close()

        # Convert the data to a JSON string
        json_data = json.dumps(artworks, indent=4)
        
        # Display JSON in the UI
        st.json(artworks)
        
        # Provide a download button for the JSON
        st.download_button(
            label="Download JSON",
            data=json_data,
            file_name="artworks.json",
            mime="application/json"
        )
    except Exception as e:
        st.error(f"Error extracting JSON data: {e}")
