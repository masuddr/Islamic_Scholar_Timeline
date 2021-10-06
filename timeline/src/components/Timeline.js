import React, { useState, useEffect } from 'react';
import './Timeline.css';
import Chart from "react-google-charts";



function Timeline() {

    


    const [datas,setDatas]=useState([]);
    const google = window.google;


    function drawChart() {
        var container = document.getElementById("example");
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();
      
        dataTable.addColumn({ type: "string", id: "Term" });
        dataTable.addColumn({ type: "string", id: "Name" });
        dataTable.addColumn({ type: "string", id: "style", role: "style" });
        dataTable.addColumn({ type: "date", id: "Start" });
        dataTable.addColumn({ type: "date", id: "End" });
        let scholarsLength = datas.length;
        for (let i = 0; i < scholarsLength; i++) {
          dataTable.addRows([
            [
              "Islamic Scholars",
              `${datas[i]["Name"]}`,
              getColor(datas[i]),
              new Date(parseInt(datas[i]["Born"]), 1, 1),
              new Date(parseInt(datas[i]["Died"]), 1, 1),
            ],
          ]);
          dataTable.setRowProperty(
            i,
            "style",
            "background-color:green !important;background-image:none"
          );
        }
        var options = {
          title: "Islamic Scholar Timeline",
          width: 1400 * 3.1,
          height: scholarsLength * 15,
          // colors: colorList,
          timeline: {
            rowLabelStyle: { fontName: "Helvetica", fontSize: 24, color: "#603913" },
            barLabelStyle: { fontName: "Comic Sans", fontSize: 16, bold: true },
          },
        };
        chart.draw(dataTable, options);
      }

      function getColor(scholar) {
        let color = "grey";
        if (typeof scholar["Fiqh"] == "undefined") {
          color = "#dda0dd";
          return color;
        } else {
          switch (scholar["Fiqh"]) {
            case "Hanafi":
              color = "	#F08080";
              break;
            case "Maliki":
              color = "	#4169E1";
              break;
            case "Shafi'i":
              color = "	#90EE90";
              break;
            case "Hanbali":
              color = "#aeaeae";
              break;
            default:
              color = "#ffff8A";
              break;
          }
        }
      
        return color;
      }

    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setDatas(myJson['data'])
          });
      }

     async function getScholars(){
         const response = await fetch('data.json'
         ,{
           headers : { 
             'Content-Type': 'application/json',
             'Accept': 'application/json'
            }
         }
         )
           .then(function(response){
             console.log(response)
             let resp =  response.json()['data'];
             return resp;
           })
           .then(function(myJson) {
             console.log(myJson);
           });
     }


      useEffect(()=>{
        setDatas(getScholars());
      },[])

    


    return (
        <div className="content">
        
        <div id="example">

        </div>
        </div>
    )
}

export default Timeline;
