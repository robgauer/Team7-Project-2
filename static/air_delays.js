function optionChanged() 
{
    var selectionAirport = document.getElementById("selAirport")  
    selectionAirport = selectionAirport.options[selectionAirport.selectedIndex].value 
    
    var selectionAirline = document.getElementById("selAirline")  
    selectionAirline = selectionAirline.options[selectionAirline.selectedIndex].value 

    var selectionMonth = document.getElementById("selMonth")  
    selectionMonth = selectionMonth.options[selectionMonth.selectedIndex].value 

    var selectionYear = document.getElementById("selYear")  
    selectionYear = selectionYear.options[selectionYear.selectedIndex].value 

    CreateInfo(selectionAirport, selectionAirline, selectionMonth, selectionYear)

}

function CreateInfo(airport, airline, month, year)
{  
    // select demographic panel to put data
    var demographicInfo = d3.select("#sample-metadata");
        
    // empty the demographic info panel each time before getting new id info
    demographicInfo.html("");

    console.log(airline)

    var found = false

    d3.json("/dashboard", function(data) 
    { 
    // get the data for the dropdwown menus: Airport, Airline, Month and the Year of the analysis:
        
        //data.forEach(function(name) 
        for (var name of data)
        {
            if (name.Year == year && name.Month == month && name.Carrier_Name == airline && name.Airport == airport)
            {
                found = true
                demographicInfo.append("h5").text("Month " + ": " + name.Month + "\n");
                demographicInfo.append("h5").text("Year " + ": " + name.Year + "\n");
                demographicInfo.append("h5").text("Airport " + ": " + name.Airport + "\n");
                demographicInfo.append("h5").text("Airline " + ": " + name.Carrier_Name + "\n");
                demographicInfo.append("h5").attr("id", "cdelay").text("Carrier Delays " + ": " + name.Carrier_Delay + "\n");
                demographicInfo.append("h5").attr("id", "wdelay").text("Weather Delays " + ": " + name.Weather_Delay + "\n");
                demographicInfo.append("h5").attr("id", "ndelay").text("National Aviation Systems Delays " + ": " + name.Nas_Delay + "\n");
                demographicInfo.append("h5").attr("id", "sdelay").text("Security Delays " + ": " + name.Security_Delay + "\n");
                demographicInfo.append("h5").attr("id", "aldelay").text("Aircraft Arriving Late Delays " + ": " + name.Late_Aircraft_Delay + "\n");
                demographicInfo.append("h5").attr("id", "candelay").text("Arrivals Cancelled " + ": " + name.Arrival_Cancelled + "\n");
                demographicInfo.append("h5").attr("id", "divdelay").text("Arrivals Diverted " + ": " + name.Arrival_Diverted + "\n");
                break;
            }
        }
          if (found == false) 
            {
                demographicInfo.append("h5").text("Selection not found") 
            } 

            drawChart();
     
    })
     
}

// initial data rendering
function init() 
{
    // select dropdown menu 
    var dropdownAirport         = d3.select("#selAirport");
    var dropdownAirline         = d3.select("#selAirline");
    var dropdownMonth           = d3.select("#selMonth");
    var dropdownYear            = d3.select("#selYear");
        
    var airports        = [];
    var airlines        = [];
    var months          = [];
    var years           = [];
        
    d3.json("/dashboard", function(data) 
    {

console.log(data)
        // get the data for the dropdwown menus: Airport, Airline, Month and the Year of the analysis:
        
        data.forEach(function(name) 
        {
            airports.push(name.Airport)
            airlines.push(name.Carrier_Name)
            months.push(name.Month)
            years.push(name.Year)
            
            //console.log(name)
        })

    var uniqueAirports = [...new Set(airports)]
        for (j = 0; j < uniqueAirports.length; j++)
        {
            dropdownAirport.append("option").text(uniqueAirports[j]).property("value");
        }

    var uniqueAirlines = [...new Set(airlines)]
        for (j = 0; j < uniqueAirlines.length; j++)
        {
            dropdownAirline.append("option").text(uniqueAirlines[j]).property("value");
        }
        
    var uniqueMonths = [...new Set(months)]
        for (j = 0; j < uniqueMonths.length; j++)
        {
            dropdownMonth.append("option").text(uniqueMonths[j]).property("value");
        }

    var uniqueYears = [...new Set(years)]
        for (j = 0; j < uniqueYears.length; j++)
        {
            dropdownYear.append("option").text(uniqueYears[j]).property("value");
        };
        
                   
    CreateInfo(uniqueAirports[0], uniqueAirlines[0], uniqueMonths[0], uniqueYears[0]);
        
    });
}
init();