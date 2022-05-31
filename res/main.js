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

function shareBoardLink() {
    navigator.clipboard.writeText(window.location.href);

    alert("Saved the shareable URL in your clipboard - feel free to share it!");
}

function addNewCategory(category, symbols) {
    const table = document.getElementById("paramsTable");
    const tr = document.createElement("tr");
    table.append(tr);

    const tdMove = document.createElement("td")
    const tdUpButton = document.createElement("button")
    tdUpButton.innerHTML = "&#11165;"
    tdMove.append(tdUpButton)
    tdUpButton.onclick = function() {
        moveUp(tr)
    }

    const tdDownButton = document.createElement("button")
    tdDownButton.innerHTML = "&#11167;"
    tdMove.append(tdDownButton)
    tdDownButton.onclick = function() {
        moveDown(tr)
    }

    tr.append(tdMove)

    const tdCategory = document.createElement("td")
    const categoryTextField = document.createElement("input")
    categoryTextField.setAttribute("type", "text");
    categoryTextField.value = category

    tr.append(tdCategory)
    tdCategory.append(categoryTextField)

    const tdValue = document.createElement("td")
    const symbolsTextField = document.createElement("input")
    symbolsTextField.setAttribute("type", "text");
    symbolsTextField.value = symbols
    symbolsTextField.size = 80
    tr.append(tdValue)
    tdValue.append(symbolsTextField)

    const tdRemove = document.createElement("button")
    tdRemove.innerHTML = "x"
    tr.append(tdRemove)
    tdRemove.onclick = function() {
        removeTableLine(tr)
    }
}

function addNewEmptyCategory() {
    addNewCategory("", "")
}

function removeTableLine(actTr) {
    const table = document.getElementById("paramsTable");
    if (2 >= table.rows.length) {
        return
    }

    actTr.parentNode.removeChild(actTr)
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function updateUrl() {
    const table = document.getElementById("paramsTable");

    let url = window.location.protocol + '//' + window.location.host + window.location.pathname + "?"

    for (let i = 1, row; row = table.rows[i]; i++) {
        const name = row.cells[1].firstChild.value
        const value = row.cells[2].firstChild.value

        if (i > 1) url += "&"
        url += name + "=" + value
    }

    window.location.href = url;
}

function goToDefaultUrl() {
    window.location.href = "?CCY Majors=FX_IDC:USDHUF|12M,FX_IDC:EURHUF|12M&CCY Minors=FX_IDC:GBPHUF|12M,FX_IDC:CHFHUF|12M,FX_IDC:PLNHUF|12M&Crypto=COINBASE:BTCUSD|12M,BINANCE:ETHUSDT|12M&Stocks=NYSE:EPAM|12M,NASDAQ:FB|12M"
}

function moveUp(actTr) {
    const parent = actTr.parentNode
    const prev = actTr.previousElementSibling

    if (!prev.previousElementSibling) {
        return
    }

    parent.removeChild(actTr)
    parent.insertBefore(actTr, prev)
}

function moveDown(actTr) {
    const parent = actTr.parentNode
    const next = actTr.nextSibling

    if (!next) {
        return
    }

    parent.removeChild(actTr)
    parent.insertBefore(actTr, next.nextSibling)
}