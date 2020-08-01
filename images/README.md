# Project 2:  Tell a Story with Data.

### Project Team 7:
* Lori Shannon
* Philip Hill
* Rob Gauer
# 
# U.S. AIRLINE DELAYS 

![flight-delays-image.jpeg](images/flight-delays-image.jpeg)

# Story Objective
  Our team created a web visualization dashboard that lets you the consumer select any U.S. airport, airline, year, and month interactively and explore the data. Upon selection the dashboard presents the data visualizations showing the history of delay measures used by the airline industry to metric their overall performance.

# Comparitive Analysis
The dashboard is a tool for business, government, the airlines, or you the general consumer to perform a data lookup of how the different types of airline delays impact overall on time performance.
   Delay Types presented:
   * Carrier Delays.
   * Weather Delays.
   * National Aviation Systems Delays.
   * Security Delays.
   * Aircraft Arriving Late Delays.
   * Arrivals Cancelled. 
   * Arrivals Diverted.
 
# Team Repository
  * https://https://github.com/Phassoc/Team7-Project-2
  * July 2020.
    

# Data Sources
   * Kaggle dataset. Airline On-Time Statistics and Delay Causes. Data for USA (June 2003 - March 2020). 
   * The monthly data source of origin: Bureau of Transportation Statistics of USA and ranges from June 2003 to March 2020.
   * Link: https://www.kaggle.com/anshuls235/airline-delay-causes
   * Data file: https://www.kaggle.com/anshuls235/airline-delay-causes?select=894233989_32020_056_airline_delay_causes.csv 
           
# Data Coding Approach - Requirements Overview
1. Visualization includes:
    * Python, Flask, HTML/CSS, JavaScript, and database MongoDB. 

2. Your project should fall into one of the below four tracks: 
   * A dashboard page with multiple charts that update from the same data.

3. Your project should include at least one JS library that we did not cover.
   * Google Charts. Interactive charts for browsers and mobile devices.
   * Link: https://developers.google.com/chart/

4. Your project must be powered by a data set with at least 100 records.
   * Dataset is 47MB. Reduced and cleaned to a smaller subset of the data.

5. Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).
   * Visualization uses dropdown menus to select airport, airline, year, and month. Then presents the visualizations.

6. Your final visualization should ideally include at least three views. 
   * Airline Delay Information.
   * Google Pie Chart.
   * Google Bar Chart.

# Data Manipulation and Functional Work Flow 
  1. Dataset CSV file is reviewed and prepared for MongoDB. 
  2. Python insert_data.py. File creates connection to MongoDB. Selects collection to use. Populates CSV file to JSON and reads the data records into MongoDB.
  3. Python app.py. File sets up MongoDB client for pymongo connection and reads collection. Uses Flask to create app.route/ and app.route/dashboard for index.html presentation.
  4. JavaScript air_delays.js. User Interaction - Creates and constructs the selection criteria requested by the end user for the data to be presented.
  5. Index.html. Presents the data visualization of the request to the end user.

# Data Visualizations
  * Home Page and User Selection Dropdown Menu

    ![home-page-and-user-selection-menu.PNG](images/home-page-and-user-selection-menu.PNG)
  
  * Airline Delay Information

    ![airline-delay-information.PNG](images/airline-delay-information.PNG)

  * Google Pie Chart

    ![airline-delays-google-pie-chart.PNG](images/airline-delays-google-pie-chart.PNG)

* Google Bar Chart

    ![airline-delays-google-bar-chart.PNG](images/airline-delays-google-bar-chart.PNG)  

* Project Visualization

    ![airline-delays-google-pie-chart.PNG](images/airline-delays-visualization.PNG)

# 
### Data Visualization Project 2
 Team 7:  Lori Shannon, Philip Hill, Rob Gauer. 
# 

# 
# Project 2: Visualize Me, Captain!

![Tell-A-Story-with-Data.png](images/Tell-A-Story-with-Data.png)

## PROJECT REQUIREMENTS

## Project Description
1. Your task is to tell a story through data visualizations.
2. Focus on providing users an interactive means to explore data themselves. 
3. Prepare a 10-minute presentation that lays out your theme, coding approach, data munging techniques, and final visualization.
4. You may choose a project of any theme, but we encourage you to think broadly.
5. You will have ample time in class to work with your group, but expect to put in hours outside of class as well. 

## Specific Requirements
1. Your visualization must include a Python Flask–powered RESTful API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.). 
2. Your project should fall into one of the below four tracks: 
    a. A custom “creative” D3.js project (i.e., a nonstandard graph or chart)
    b. A combination of web scraping and Leaflet or Plotly
    c. A dashboard page with multiple charts that update from the same data
    d. A thick” server that performs multiple manipulations on data in a database prior to visualization (must be approved)
3. Your project should include at least one JS library that we did not cover.
4. Your project must be powered by a data set with at least 100 records.
5. Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).
6. Your final visualization should ideally include at least three views. 
# 
### Copyright
Trilogy Education Services © 2019. All Rights Reserved.
# 