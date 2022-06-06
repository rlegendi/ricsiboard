# ricsiboard

Your personalized trading dashboard for the morning coffee :-)

Live at: https://ricsiboard.com

## TODO

* Public URL
* Get review
* Share button
* Fix filtering for params (fbclid should be filtered out from charts, etc.)

### Later maybe

* Feature - Rightclick -> Add trendlines somehow?
* Feature - Add chart with button (search tickers)

## Links

* Widget: https://www.tradingview.com/widget/symbol-overview/
* Originally found here (there's a more complex one): https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/?library=cloud-widget
* Overlay: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
* How to set up trendline: https://stackoverflow.com/questions/50870167/tradingview-drawing
    var order = widget.chart().createOrderLine()
      .setText("Buy Line")
      .setLineLength(3) 
      .setLineStyle(0) 
      .setQuantity("221.235 USDT")
    order.setPrice(7000);

## To be tested later

* HTTPS + copy to clipboard
* Donate button lol
