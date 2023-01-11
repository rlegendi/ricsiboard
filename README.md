# ricsiboard

Your personalized trading dashboard for the morning coffee :-)

Live at: https://ricsiboard.com

## License

Copyright (c) rlegendi

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.

## Links

* Widget: https://www.tradingview.com/widget/symbol-overview/
* Originally found here (there's a more complex one): https://www.tradingview.com/HTML5-stock-forex-bitcoin-charting-library/?library=cloud-widget
* Overlay: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
* How to set up trendline: https://stackoverflow.com/questions/50870167/tradingview-drawing
	```
	var order = widget.chart().createOrderLine()
	  .setText("Buy Line")
	  .setLineLength(3)
	  .setLineStyle(0)
	  .setQuantity("221.235 USDT")
	order.setPrice(7000);
	```

## Backlog

* Keywords for Google, SEO
* New page / FAQ
* Twitter feed widget?
* Get review :-)
* Validate that there are no , and | characters within the paramsTable category fields
* Exclude tests from deploy
* Add other settings such as: https://www.tradingview.com/widget/symbol-overview/
  * Do we need consent dialog for saving this to localstorage or stg?

### Later maybe

* Feature - Rightclick -> Add trendlines somehow?
* Feature - Add chart with button (search tickers)
* Mobile - Params table is pretty much screwed up and unusable

## For the review to discuss

* ; or not to ;
* Eliminate JQuery? Needs Bootstrap update, lot of work
* Global state or local state - params enough hidden hm?
* More functional approach?
