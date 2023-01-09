describe('When testing the main codebase', function() {
    describe('when convertChartConfig is called', function() {
        it('should rewrite all timeframes to daily', function() {
            const actual = convertChartConfig('FX_IDC:USDHUF|12M,FX_IDC:EURHUF|12M,FX_IDC:GBPHUF|12M,FX_IDC:CHFHUF|12M,FX_IDC:PLNHUF|12M', '1D');
            expect(actual).toEqual('FX_IDC:USDHUF|1D,FX_IDC:EURHUF|1D,FX_IDC:GBPHUF|1D,FX_IDC:CHFHUF|1D,FX_IDC:PLNHUF|1D');
        });

        it('should rewrite all timeframes to monthly', function() {
            const actual = convertChartConfig('COINBASE:BTCUSD|12M,BINANCE:ETHUSDT|12M', '1M');
            expect(actual).toEqual('COINBASE:BTCUSD|1M,BINANCE:ETHUSDT|1M');
        });

        it('should rewrite all timeframes to 3 monthly', function() {
            const actual = convertChartConfig('BER:OTP|12M', '3M');
            expect(actual).toEqual('BER:OTP|3M');
        });

        it('should rewrite all timeframes to yearly', function() {
            const actual = convertChartConfig('NASDAQ:FB|12M,NYSE:EPAM|12M', '1Y');
            expect(actual).toEqual('NASDAQ:FB|1Y,NYSE:EPAM|1Y');
        });

        it('should rewrite all timeframes to 5 yearly', function() {
            const actual = convertChartConfig('FX_IDC:USDHUF|12M,FX_IDC:EURHUF|12M,FX_IDC:GBPHUF|12M,FX_IDC:CHFHUF|12M,FX_IDC:PLNHUF|12M', '5Y');
            expect(actual).toEqual('FX_IDC:USDHUF|5Y,FX_IDC:EURHUF|5Y,FX_IDC:GBPHUF|5Y,FX_IDC:CHFHUF|5Y,FX_IDC:PLNHUF|5Y');
        });

        it('should rewrite all timeframes to All', function() {
            const actual = convertChartConfig('FX_IDC:USDHUF|12M,FX_IDC:EURHUF|12M,FX_IDC:GBPHUF|12M,FX_IDC:CHFHUF|12M,FX_IDC:PLNHUF|12M', 'All');
            expect(actual).toEqual('FX_IDC:USDHUF|All,FX_IDC:EURHUF|All,FX_IDC:GBPHUF|All,FX_IDC:CHFHUF|All,FX_IDC:PLNHUF|All');
        });

        it('should rewrite all timeframes from All', function() {
            const actual = convertChartConfig('FX_IDC:USDHUF|All,FX_IDC:EURHUF|All,FX_IDC:GBPHUF|All,FX_IDC:CHFHUF|All,FX_IDC:PLNHUF|All', '12M');
            expect(actual).toEqual('FX_IDC:USDHUF|12M,FX_IDC:EURHUF|12M,FX_IDC:GBPHUF|12M,FX_IDC:CHFHUF|12M,FX_IDC:PLNHUF|12M');
        });
    });
});