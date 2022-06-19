import React, { useEffect, useDispatch, useState, useRef } from "react";
// import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { AdvancedRealTimeChart, SymbolOverview  } from "react-ts-tradingview-widgets";

// components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Market = () => {

  const TickerTapeWidgetRef = useRef(null);
  const MarketOverViewRef = useRef(null)
  const MarketNewRef = useRef(null)

  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = ` {
            "symbols": [
              {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500"
              },
              {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR/USD"
              },
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "Bitcoin"
              },
              {
                "description": "BSE",
                "proName": "BSE:SENSEX"
              },
              {
                "description": "NASDAQ",
                "proName": "NASDAQ:NDX"
              },
              {
                "description": "USOIL",
                "proName": "TVC:USOIL"
              },
              {
                "description": "EU50",
                "proName": "CURRENCYCOM:EU50"
              }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "in"
          }`
    TickerTapeWidgetRef.current.appendChild(script);
  }, [])

  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = `{
      "feedMode": "all_symbols",
      "colorTheme": "dark",
      "isTransparent": false,
      "displayMode": "regular",
      "width": "100%",
      "height": "100%",
      "locale": "in"
    }`
    MarketNewRef.current.appendChild(script);
  }, [])

  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = ` {
      "colorTheme": "dark",
    "dateRange": "12M",
    "showChart": true,
    "locale": "in",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "showFloatingTooltip": false,
    "width": "100%",
    "height": "100%",
    "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
    "plotLineColorFalling": "rgba(41, 98, 255, 1)",
    "gridLineColor": "rgba(42, 46, 57, 0)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
    "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
    "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
    "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
    "tabs": [
    {
      "title": "Indices",
    "symbols": [
    {
      "s": "FOREXCOM:SPXUSD",
    "d": "S&P 500"
},
    {
      "s": "FOREXCOM:NSXUSD",
    "d": "US 100"
},
    {
      "s": "FOREXCOM:DJI",
    "d": "Dow 30"
},
    {
      "s": "INDEX:NKY",
    "d": "Nikkei 225"
},
    {
      "s": "INDEX:DEU40",
    "d": "DAX Index"
},
    {
      "s": "FOREXCOM:UKXGBP",
    "d": "UK 100"
}
    ],
    "originalTitle": "Indices"
},
    {
      "title": "Futures",
    "symbols": [
    {
      "s": "CME_MINI:ES1!",
    "d": "S&P 500"
},
    {
      "s": "CME:6E1!",
    "d": "Euro"
},
    {
      "s": "COMEX:GC1!",
    "d": "Gold"
},
    {
      "s": "NYMEX:CL1!",
    "d": "Crude Oil"
},
    {
      "s": "NYMEX:NG1!",
    "d": "Natural Gas"
},
    {
      "s": "CBOT:ZC1!",
    "d": "Corn"
}
    ],
    "originalTitle": "Futures"
},
    {
      "title": "Forex",
    "symbols": [
    {
      "s": "FX:EURUSD",
    "d": "EUR/USD"
},
    {
      "s": "FX:GBPUSD",
    "d": "GBP/USD"
},
    {
      "s": "FX:USDJPY",
    "d": "USD/JPY"
},
    {
      "s": "FX:USDCHF",
    "d": "USD/CHF"
},
    {
      "s": "FX:AUDUSD",
    "d": "AUD/USD"
},
    {
      "s": "FX:USDCAD",
    "d": "USD/CAD"
}
    ],
    "originalTitle": "Forex"
},
    {
      "title": "Commodity",
    "symbols": [
    {
      "s": "TVC:USOIL"
},
    {
      "s": "TVC:SILVER"
},
    {
      "s": "OANDA:XAUUSD"
},
    {
      "s": "GLOBALPRIME:WHEAT"
}
    ]
}
    ]
}`
    MarketOverViewRef.current.appendChild(script);
  }, [])

  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "#131722" }}>
        <div className="container" style={{padding: "12px 0"}}>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <h4 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>World Markets at Glance</h4>

            </div>
            <div className="col-lg-12 mt-3">
              <div className="tradingview-widget-container" ref={TickerTapeWidgetRef}>
                <div className="tradingview-widget-container__widget"></div>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-12 mt-5" style={{width: "100vw", height: "45vh"}}>
          
            <div class="tradingview-widget-container" ref={MarketNewRef}>
              <div class="tradingview-widget-container__widget"></div>
            </div>

            </div>
          </div>

          <div className="row">

            <div className="col-lg-4 mt-5">
              <h4 style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                <span className="badge bg-success">Market overview</span>
              </h4>
              <div className="tradingview-widget-container" ref={MarketOverViewRef}>
                <div className="tradingview-widget-container__widget"></div>
              </div>
            </div>

            <div className="col-lg-8 mt-5" style={{ height: "30rem" }}>
              <h4 style={{ textAlign: "center", marginBottom: "0.75rem" }}>
                <span className="badge bg-success">Sensex</span>
              </h4>
              {/* <TradingViewWidget
                symbol="BSE:SENSEX"
                theme={Themes.DARK}
                locale="fr"
                hide_side_toolbar={false}
                autosize
              /> */}
              <AdvancedRealTimeChart
              symbol="BSE:SENSEX"
               theme="dark"
               locale="fr" 
               autosize
               hide_side_toolbar={false}
               >
               </AdvancedRealTimeChart>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
                <h4 style={{ marginBottom: "2rem", color: "white", fontWeight: "bold", marginTop: "5rem"}}>
                    {/* <span className="badge bg-success">Sensex</span> */}
                    Major Stocks
                  </h4>
                <SymbolOverview 
                    symbols= {
                      [
                        [
                          "Reliance",
                          "BSE:RELIANCE|12M"
                        ],
                        [
                          "HDFC Bank",
                          "BSE:HDFCBANK|12M"
                        ],
                        [
                          "ICICI Bank",
                          "BSE:ICICIBANK|12M"
                        ],
                        [
                          "TCS",
                          "BSE:TCS|12M"
                        ],
                        [
                          "Infosys",
                          "BSE:INFY|12M"
                        ],
                        [
                          "Tata Motors",
                          "BSE:TATAMOTORS|12M"
                        ],
                        [
                          "Kotak Bank",
                          "BSE:KOTAKBANK|12M"
                        ],
                        [
                          "L&T",
                          "BSE:LT|12M"
                        ],
                        [
                          "AXIS Bank",
                          "BSE:AXISBANK|12M"
                        ],
                        [
                          "HUL",
                          "BSE:HINDUST|12M"
                        ],
                        [
                          "HDFC",
                          "BSE:HDFC|12M"
                        ]
                      ]
                    }
                    colorTheme="dark"
                    width="100%"
                    height="36rem"
                    chartType="candlesticks"
                    downColor="#800080"
                    borderDownColor="#800080"
                    wickDownColor="#800080" />
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: 0 }} />
    </>
  )
}

export default Market