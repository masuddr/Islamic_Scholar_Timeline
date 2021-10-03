let json = (function () {
  var json = null;
  $.ajax({
    async: false,
    global: false,
    url: "/data.json",
    dataType: "json",
    success: function (data) {
      json = data;
    },
  });
  return json;
})();

function getCategory(scholar) {
  let output = "";

  if (typeof scholar["Aqeedah"] == "undefined") {
    output = "Aqeedah: Athari/Hanbali";
    return output;
  } else {
    switch (scholar["Aqeedah"]) {
      case "Athari":
        output = "Aqeedah: Athari/Hanbali";
        break;
      case "Ash'ari":
        output = "Aqeedah: Ash'ari";
        break;
      case "Maturidi":
        output = "Aqeedah: Maturidi";
        break;
      default:
        output = "Aqeedah: Other";
        break;
    }
  }

  return output;
}

function getColor(scholar) {
  let color = "grey";

  if (typeof scholar["Fiqh"] == "undefined") {
    color = "#dda0dd";
    return color;
  } else {
    switch (scholar["Fiqh"]) {
      case "Hanafi":
        color = "#ff7f7f";
        break;
      case "Maliki":
        color = "#33a1de";
        break;
      case "Shafi'i":
        color = "#8aff8a";
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

let scholarData = json["data"];

let colorList = [];
scholarData.forEach((element) => {
  colorList.push(getColor(element));
});



google.charts.load("current", { packages: ["timeline"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById("example");
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: "string", id: "Term" });
  dataTable.addColumn({ type: "string", id: "Name" });
  dataTable.addColumn({ type: 'string', id: 'style', role: 'style' });
  dataTable.addColumn({ type: "date", id: "Start" });
  dataTable.addColumn({ type: "date", id: "End" });
  let scholarsLength = scholarData.length;
  for (let i = 0; i < scholarsLength; i++) {
    dataTable.addRows([
      [
        getCategory(scholarData[i]),
        `${scholarData[i]["Name"]}`,
        getColor(scholarData[i]),
        new Date(parseInt(scholarData[i]["Born"]), 1, 1),
        new Date(parseInt(scholarData[i]["Died"]), 1, 1),
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
    timeline: { rowLabelStyle: {fontName: 'Helvetica', fontSize: 24, color: '#603913' },
    barLabelStyle: { fontName: 'Comic Sans', fontSize: 16, bold : true,  } 


  }

    
  };
  chart.draw(dataTable, options);


  

}
