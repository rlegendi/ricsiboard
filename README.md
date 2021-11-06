# ricsiboard

Some random charts.

## TODO

* Get review - Zsolti? KissP?
* Learn bootstrap -- HAHA!

* Gridstrap-et berantani kintrol vhogy -- miert ad ra CORB-t, amikor a tobbi megy? Azon majd sokat lehetne nyerni

* Infra - Deploy with a click
* Bug - mozgatas csak az also feluleten megoldott

* Feature - Save layout (charts, orders, lines)
* Feature - Rightclick -> Add trendlines somehow?
* Feature - Add chart with button (search tickers)

* Fancy - Favico
* Infra - Load gristrap from external, versionized source? (CORB? Why others working?) We could save a lot of KBs on S3 :-)))

## Links
* https://rosspi.github.io/gridstrap.js/
* Widget: https://www.tradingview.com/widget/symbol-overview/
* Originally found here (there's a more complex one): https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/?library=cloud-widget
* How to set up trendline: https://stackoverflow.com/questions/50870167/tradingview-drawing
    var order = widget.chart().createOrderLine()
      .setText("Buy Line")
      .setLineLength(3) 
      .setLineStyle(0) 
      .setQuantity("221.235 USDT")
    order.setPrice(7000);
