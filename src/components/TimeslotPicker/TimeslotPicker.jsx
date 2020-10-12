import React from "react";
import "./TimeslotPicker.css";

import styles from "assets/jss/material-kit-react/customCheckboxRadioSwitch";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(styles);

export default function TimeslotPicker() {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );

  const handleToggle = () => {
    let toggle;
    if (checked) {
      toggle = false;
    } else {
      toggle = true;
    }
    setChecked(toggle);
  };
  const createArray = () => {
    const width = 7;
    const height = 6;

    const checkboxArray = new Array(width);
    for (let i = 0; i < width; i++) {
      checkboxArray[i] = new Array(height);
    }

    let time = ["8-9", "9-12", "12-2", "2-5", "5-7", "7-9"];
    let html = "<table >";
    // Add Days of the week:
    html +=
      "<td></td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td><td>S</td>";
    for (var i = 0; i < height; i++) {
      html += "<tr>";
      html += "<td>" + time[i] + "</td>";
      html += "<td>Item</td>";
      html += "<td>this</td>";
      html += "<td>is</td>";
      html += "<td>an</td>";
      html += "<td>item</td>";
      html += "<td>in</td>";
      html += "<td>array</td>";
      html += "</tr>";
    }
    html += "</table>";

    return html;
  };

  let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    {
      name: "Monte Falterona",
      height: 1654,
      place: "Parco Foreste Casentinesi",
    },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" },
  ];

  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      Object.keys(element).forEach((key) => {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      });
    }
  }

  const table = document.querySelector("table");
  const data = Object.keys(mountains[0]);
  generateTable(table, mountains);
  generateTableHead(table, data);

  return table;
  // return <div className="timeslot-container">{createArray()}</div>;
}
