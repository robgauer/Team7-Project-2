import pymongo
import pandas as pd

# Setup connection to mongodb
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# Select database and collection to use
db = client.airline_data
CollAirDelays = db.CollAirDelays

def csv_to_json(delay_file_name):
    airdata = pd.read_csv(delay_file_name)
    airdata.set_index(["year"])
    print (airdata.head())
    return airdata.to_dict('records')

CollAirDelays.insert_many(csv_to_json('sample_airline_delay_causes_large.csv'))