/**
 * Copyright (c) rlegendi
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function chartOf(fullTicker, containerId) {
    new TradingView.MediumWidget({
        "symbols": [
            [
                fullTicker
            ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "400",
        "locale": "en",
        "colorTheme": "light",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "fontColor": "#787B86",
        "isTransparent": false,
        "autosize": true,
        "showFloatingTooltip": true,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "Trebuchet MS, sans-serif",
        "noTimeScale": false,
        "chartType": "area",
        "lineColor": "#2962FF",
        "bottomColor": "rgba(41, 98, 255, 0)",
        "topColor": "rgba(41, 98, 255, 0.3)",
        "container_id": containerId
    });
}

/** Works only over HTTPS, but redirect should solve that in CF. */
function shareBoardLink() {
    navigator.clipboard.writeText(window.location.href);

    alert("Saved the shareable URL in your clipboard - feel free to share it!");
}

function addNewDashboardConfigLine(category, symbols) {
    const table = document.getElementById("paramsTable");
    const tr = document.createElement("tr");
    table.append(tr);

    const tdMove = document.createElement("td");
    const tdUpButton = document.createElement("button");
    tdUpButton.innerHTML = "&#11165;"
    tdMove.append(tdUpButton);
    tdUpButton.onclick = function() {
        moveUpDashboardConfigLine(tr);
    }

    const tdDownButton = document.createElement("button");
    tdDownButton.innerHTML = "&#11167;"
    tdMove.append(tdDownButton);
    tdDownButton.onclick = function() {
        moveDownDashboardConfigLine(tr);
    }

    tr.append(tdMove);

    const tdCategory = document.createElement("td");
    const categoryTextField = document.createElement("input");
    categoryTextField.setAttribute("type", "text");
    categoryTextField.value = category;

    tr.append(tdCategory);
    tdCategory.append(categoryTextField);

    const tdValue = document.createElement("td");
    const symbolsTextField = document.createElement("input");
    symbolsTextField.setAttribute("type", "text");
    symbolsTextField.setAttribute("class", "paramTableSymbolField")
    symbolsTextField.value = symbols;
    symbolsTextField.size = 80;
    tr.append(tdValue);
    tdValue.append(symbolsTextField);

    const tdRemove = document.createElement("button");
    tdRemove.innerHTML = "x";
    tr.append(tdRemove);
    tdRemove.onclick = function() {
        removeDashboardConfigLine(tr);
    }
}

function moveUpDashboardConfigLine(actTr) {
    const parent = actTr.parentNode;
    const prev = actTr.previousElementSibling;

    if (!prev.previousElementSibling) {
        return;
    }

    parent.removeChild(actTr);
    parent.insertBefore(actTr, prev);
}

function moveDownDashboardConfigLine(actTr) {
    const parent = actTr.parentNode;
    const next = actTr.nextSibling;

    if (!next) {
        return;
    }

    parent.removeChild(actTr);
    parent.insertBefore(actTr, next.nextSibling);
}

function addNewEmptyDashboardConfigLine() {
    addNewDashboardConfigLine("", "");
}

function removeDashboardConfigLine(actTr) {
    const table = document.getElementById("paramsTable");
    if (2 >= table.rows.length) {
        return;
    }

    actTr.parentNode.removeChild(actTr);
}

function populateDashboardConfigTable(params) {
    for (let [key, values] of Object.entries(params)) {
        console.log(key, values);

        addNewDashboardConfigLine(key, values);
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function updateUrlBasedOnDashboardConfig() {
    const table = document.getElementById("paramsTable");

    let url = window.location.protocol + '//' + window.location.host + window.location.pathname + "?"

    let first = true;
    for (let i = 1, row; row = table.rows[i]; i++) {
        const name = row.cells[1].firstChild.value
        const value = row.cells[2].firstChild.value

        if (first) first = false
        else url += "&"

        url += name + "=" + value
    }

    window.location.href = url;
}

function goToDefaultUrl() {
    window.location.href = "?CCY%20-%20Hu=FX_IDC:USDHUF|12M,FX_IDC:EURHUF|12M,FX_IDC:GBPHUF|12M,FX_IDC:CHFHUF|12M,FX_IDC:PLNHUF|12M&Crypto=COINBASE:BTCUSD|12M,BINANCE:ETHUSDT|12M&Stocks%20-%20Hu=BER:OTP|12M,SWB:RIG2|12M&Stocks%20-%20Tech=NASDAQ:FB|12M,NYSE:EPAM|12M"
}

function displayCharts(params) {
    let id = 1;
    for (let [key, values] of Object.entries(params)) {
        console.log(key, values);
        const header = document.createElement("h1");
        header.innerHTML = key;
        $("#instrument-list").append(header);

        const list = document.createElement("div");
        list.classList.add("row", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "g-3");
        $("#instrument-list").append(list);

        const arr = values.split(",")
        for (let i = 0; i < arr.length; i++) {
            const viewId = "view" + id;
            const fullTicker = arr[i];
            const shortTicker = fullTicker.replaceAll(":", "-").substring(0, fullTicker.indexOf("|"));
            let templateHtml = $("#chart-template").html();

            templateHtml = templateHtml.replaceAll("${view_id}", viewId);
            templateHtml = templateHtml.replaceAll("${ticker}", shortTicker);
            templateHtml = templateHtml.replaceAll("${ticker_full}", fullTicker);

            const div = document.createElement("div");
            div.innerHTML = templateHtml;

            list.append(div);
            chartOf(fullTicker, viewId)
            id = id + 1;
        }
    }
}

function getCleanedUpURLSearchParams(allUrlSearchParams) {
    const ret = new URLSearchParams(allUrlSearchParams);

    ret.delete("fbclid");
    ret.delete("gclid");

    allUrlSearchParams.forEach((value, key) => {
        if (!key || !value) {
            ret.delete(key);
        }
    });

    return ret;
}

function populateContentOnLoad() {
    const allUrlSearchParams = new URLSearchParams(window.location.search);
    const cleanedUpUrlSearchParams = getCleanedUpURLSearchParams(allUrlSearchParams);
    const params = Object.fromEntries(cleanedUpUrlSearchParams.entries());

    const noParamsGiven = Object.keys(params).length == 0;
    if (noParamsGiven) {
        goToDefaultUrl();
    }

    displayCharts(params);
    populateDashboardConfigTable(params);
}

function convertChartConfig(config, timeFrameToUse) {
    const data = config.split(',');
    for (var i = 0; i < data.length; ++i) {
        const actValue = data[i];
        data[i] = actValue.substring(0, actValue.indexOf('|')) + '|' + timeFrameToUse;
    }

    return data.join(',');
}

function updateAllTimeFrames() {
    const symbolFields = document.getElementsByClassName('paramTableSymbolField');
    const timeFrameToUse = document.getElementById("timeFramePeriod").value;

    if (!timeFrameToUse) {
        return;
    }

    for (var i = 0; i < symbolFields.length; i++) {
        const actSymbolField = symbolFields.item(i);

        const actValue = actSymbolField.value;
        const newValue = convertChartConfig(actValue, timeFrameToUse);

        actSymbolField.value = newValue;
    }
}