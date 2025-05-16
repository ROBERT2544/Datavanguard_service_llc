from flask import Flask, request, jsonify
import pyodbc

app = Flask(__name__)

# SQL Server connection configuration
server = 'DESKTOP-V5RMNU6'
database = 'signup_data'
connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};Trusted_Connection=yes;'

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    first_name = data.get('firstName')
    middle_name = data.get('middleName', None)
    last_name = data.get('lastName')
    email = data.get('email')
    course = data.get('courses')
    country = data.get('country')
    city = data.get('city')
    password = data.get('password')

    try:
        # Connect to SQL Server
        conn = pyodbc.connect(connection_string)
        cursor = conn.cursor()

        # Insert data into the Users table
        query = """
            INSERT INTO Users (FirstName, MiddleName, LastName, Email, Course, Country, City, Password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """
        cursor.execute(query, (first_name, middle_name, last_name, email, course, country, city, password))
        conn.commit()

        cursor.close()
        conn.close()
        return jsonify({'message': 'Data saved successfully!'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)