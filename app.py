import pymongo
import os
from flask import Flask
from flask import render_template
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.airline_data
CollAirDelays = db.CollAirDelays


@app.route("/")
def index():

    # find all the items in the db and set it to a variable...
    delays = CollAirDelays.find()
    
    # render an index.html template and pass it the data that was retrieved from the database...
    return render_template("index.html", delays=delays)

@app.route("/dashboard")
def dash_data():
    
    delays = CollAirDelays.find()
      
    json_variables = []
    for delay in delays:
        delay_dict = {}
        delay_dict["Year"] = delay["year"]
        delay_dict["Month"] = delay["month"]
        delay_dict["Carrier"] = delay["carrier"]
        delay_dict["Carrier_Name"] = delay["carrier_name"]
        delay_dict["Airport"] = delay["airport"]
        delay_dict["Airport_Name"] = delay["airport_name"]
        delay_dict["Arriving_Flights"] = delay["arr_flights"]
        delay_dict["Arrival_Del15"] = delay["arr_del15"]

        #  delay_dict["Carrier_CT"] = delay["carrier_ct"]
        #  delay_dict["Weather_CT"] = delay["weather_ct"]
        #  delay_dict["Nas_CT"] = delay["nas_ct"]
        #  delay_dict["Security_CT"] = delay["security_ct"]
        #  delay_dict["Late_Aircraft_CT"] = delay["late_aircraft_ct"]
        
        delay_dict["Arrival_Cancelled"] = delay["arr_cancelled"]
        delay_dict["Arrival_Diverted"] = delay["arr_diverted"]
        delay_dict["Arrival_Delay"] = delay["arr_delay"]
        delay_dict["Carrier_Delay"] = delay["carrier_delay"]
        delay_dict["Weather_Delay"] = delay["weather_delay"]
        delay_dict["Nas_Delay"] = delay["nas_delay"]
        delay_dict["Security_Delay"] = delay["security_delay"]
        delay_dict["Late_Aircraft_Delay"] = delay["late_aircraft_delay"]
        json_variables.append(delay_dict)
    return jsonify(json_variables)

if __name__ == "__main__":
    app.run(debug=True)
