am5.ready(function () {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    if ($("#chartdiv").length == 0) {
        return;
    }
    var root = am5.Root.new("chartdiv");
    root._logo.dispose();

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true,
            layout: root.verticalLayout,
            maxTooltipDistance: 0,
            pinchZoomX: false
        })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set(
        "cursor",
        am5xy.XYCursor.new(root, {
            behavior: "none"
        })
    );
    cursor.lineY.set("visible", false);

    // The data
    var data = [
        {
            month: "01",
            Refunds: 60,
            Earnings: 50,
            Order: 12
        },
        {
            month: "02",
            Refunds: 40,
            Earnings: 60,
            Order: 20
        },
        {
            month: "03",
            Refunds: 50,
            Earnings: 70,
            Order: 30
        },
        {
            month: "04",
            Refunds: 70,
            Earnings: 70,
            Order: 40
        },
        {
            month: "05",
            Refunds: 77,
            Earnings: 80,
            Order: 11
        },
        {
            month: "06",
            Refunds: 90,
            Earnings:80,
            Order: 20
        },
        {
            month: "07",
            Refunds: 90,
            Earnings: 80,
            Order: 19
        },
        {
            month: "08",
            Refunds: 15,
            Earnings: 115,
            Order: 11
        },
        {
            month: "09",
            Refunds: 82,
            Earnings: 75,
            Order: 71
        },
        {
            month: "10",
            Refunds: 81,
            Earnings: 15,
            Order: 81
        },
        {
            month: "11",
            Refunds: 81,
            Earnings: 75,
            Order: 21
        },
        {
            month: "12",
            Refunds: 50,
            Earnings: 65,
            Order: 51
        }
    ];

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.5,
            categoryField: "month",
            startLocation: 0,
            endLocation: 0,
            renderer: am5xy.AxisRendererX.new(root, {
                minGridDistance: 20
            }),
            tooltip: am5.Tooltip.new(root, {})
        })
    );
    let xRenderer = xAxis.get("renderer");
    xRenderer.labels.template.setAll({
        fill: am5.color(0x737373),
    });

    xAxis.data.setAll(data);

    var yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
            extraTooltipPrecision: 1,
            calculateTotals: true,
            type: "value",
            numberFormat: "#",
            renderer: am5xy.AxisRendererY.new(root, {})
        })
    );

    let xRenderer2 = yAxis.get("renderer");
    xRenderer2.labels.template.setAll({
        fill: am5.color(0x737373)
    });

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function createSeries(name, field, color) {
        var series = chart.series.push(
            am5xy.SmoothedXLineSeries.new(root, {
                name: name,
                stacked: true,
                hideCredits: false,
                stroke: color,
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: field,
                categoryXField: "month",
                strokeDasharray: 1,
                strokeDashoffset: 1,
                // legendValueText: "{valueY}",
                legendLabelText: "[{stroke} #888]{name}[/]: [bold #888]{valueY}[/]",
                legendRangeLabelText: "[{stroke} #888]{name}[/]",
                tooltip: am5.Tooltip.new(root, {
                    pointerOrientation: "horizontal",
                    labelText: "[bold]{name}[/]\n{categoryX}: {valueY.formatNumber('#')}"
                })
            })
        );

        series.fills.template.setAll({
            fillOpacity: 0,
            fill: color,
            visible: true
        });
        // series.bullets.push(function (root) {
        //     return am5.Bullet.new(root, {
        //         sprite: am5.Circle.new(root, {
        //             radius: 4,
        //             fill: "#ffffff",
        //             stroke: color
        //         })
        //     });
        // });
        series.data.setAll(data);
        series.appear(1000);
    }

    createSeries("Order", "Order", "#3AAB67");
    createSeries("Refunds", "Refunds", "#E45959");
    createSeries("Earnings", "Earnings", "#F58A3C");
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
        am5.Legend.new(root, {
            // centerX: am5.p50,
            x: 30,
            y: am5.percent(97)
        })
    );

    legend.data.setAll(chart.series.values);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
}); // end am5.ready()
