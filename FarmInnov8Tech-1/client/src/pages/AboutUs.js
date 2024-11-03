// import React from 'react';
// import '../styles/AboutUs.css';

// export default function AboutUs() {
//     return (
//         <div className="about-us-container">
//             <div className="about-us-content">
//                 <h1 className="about-us-heading">Analytics</h1>
//                 <p className="about-us-text">
//                     RedReserve is dedicated to making blood donation simple and impactful. Our mission is to connect donors with those in need and to ensure that every drop of blood can save lives. We work closely with hospitals and blood banks to streamline the donation process and make it as efficient as possible.
//                 </p>
//                 <p className="about-us-text">
//                     Our team is comprised of passionate individuals committed to improving healthcare and supporting the community. We believe in the power of giving and strive to create a platform that fosters a spirit of generosity and support.
//                 </p>
//                 <p className="about-us-text">
//                     One of the key areas we focus on is helping patients with thalassemia. Thalassemia is a genetic blood disorder that requires regular blood transfusions to manage. By facilitating a smooth and efficient donation process, RedReserve plays a crucial role in ensuring that these patients receive the timely and life-saving blood transfusions they need. Our platform helps match donors with thalassemia patients and ensures a consistent supply of compatible blood, making a significant difference in their quality of life and treatment outcomes.
//                 </p>
//             </div>
//         </div>
//     );
// }


// import React from 'react';
// import '../styles/AboutUs.css';

// export default function AboutUs() {
//     return (
//         <div className="about-us-container">
//             <div className="about-us-content">
//                 <h1 className="about-us-heading">Analytics at FarmTech Innovations</h1>
//                 <p className="about-us-text">
//                     At FarmTech Innovations, we are committed to empowering farmers through data-driven insights and cutting-edge analytics. Our mission is to leverage technology to enhance agricultural productivity, sustainability, and efficiency. By providing farmers with real-time data and analytics, we help them make informed decisions that optimize crop yields, reduce waste, and increase profitability.
//                 </p>
//                 <p className="about-us-text">
//                     Our analytics platform integrates data from various sources, including weather forecasts, soil conditions, and crop health sensors. This comprehensive approach enables farmers to monitor their fields closely, predict potential issues, and apply precise interventions to address them. Our goal is to support farmers in adopting sustainable practices while maximizing their output.
//                 </p>
//                 <p className="about-us-text">
//                     We believe in the power of data to transform agriculture. Our dedicated team of data scientists and agronomists work tirelessly to develop models that predict crop diseases, recommend optimal planting times, and suggest effective pest management strategies. Through our analytics solutions, we aim to revolutionize farming by making it more data-centric, sustainable, and resilient.
//                 </p>
//                 <p className="about-us-text">
//                     At FarmTech Innovations, analytics is not just about numbers; it's about creating a smarter agricultural ecosystem. By understanding and anticipating the needs of farmers, we provide actionable insights that drive better decision-making and foster a community of informed, empowered, and successful farmers.
//                 </p>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect } from 'react';
// import '../styles/AboutUs.css';  // Import the CSS file

// const CropSalesAnalytics = () => {
//     useEffect(() => {
//         window.google.charts.load('current', { 'packages': ['corechart'] });
//         window.google.charts.setOnLoadCallback(drawCharts);
//     }, []);

//     const drawCharts = () => {
//         drawPieChart();
//         drawBarChart();
//         drawLineChart();
//         drawBubbleChart();
//         drawScatterChart();
//     };

//     const drawPieChart = () => {
//         var data = window.google.visualization.arrayToDataTable([
//             ['Crop', 'Sales'],
//             ['Paddy', 11],
//             ['Wheat', 2],
//             ['Flour', 2],
//             ['Sugar Cane', 2],
//             ['Pineapple', 7]
//         ]);

//         var options = {
//             title: 'Market Analytics'
//         };

//         var chart = new window.google.visualization.PieChart(document.getElementById('piechart'));
//         chart.draw(data, options);
//     };

//     const drawBarChart = () => {
//         var data = window.google.visualization.arrayToDataTable([
//             ['Crop', 'Sales'],
//             ['Paddy', 11],
//             ['Wheat', 2],
//             ['Flour', 2],
//             ['Sugar Cane', 2],
//             ['Pineapple', 7]
//         ]);

//         var options = {
//             title: 'Sales Comparison (Bar Chart)',
//             hAxis: { title: 'Crops' },
//             vAxis: { title: 'Sales' },
//             bars: 'vertical'
//         };

//         var chart = new window.google.visualization.BarChart(document.getElementById('barchart'));
//         chart.draw(data, options);
//     };

//     const drawLineChart = () => {
//         var data = window.google.visualization.arrayToDataTable([
//             ['Month', 'Paddy', 'Wheat', 'Flour', 'Sugar Cane', 'Pineapple'],
//             ['Jan', 3, 1, 1, 1, 2],
//             ['Feb', 4, 2, 1, 1, 2],
//             ['Mar', 5, 3, 2, 1, 3],
//             ['Apr', 6, 3, 2, 2, 4],
//             ['May', 7, 4, 2, 2, 5],
//             ['Jun', 8, 4, 3, 3, 5],
//             ['Jul', 9, 5, 3, 3, 6],
//             ['Aug', 10, 5, 4, 4, 6],
//             ['Sep', 11, 6, 4, 4, 7],
//             ['Oct', 12, 6, 5, 5, 8],
//             ['Nov', 13, 7, 5, 5, 8],
//             ['Dec', 14, 7, 6, 6, 9]
//         ]);

//         var options = {
//             title: 'Monthly Sales Trends',
//             hAxis: { title: 'Month' },
//             vAxis: { title: 'Sales' },
//             series: { 0: { curveType: 'function' } }
//         };

//         var chart = new window.google.visualization.LineChart(document.getElementById('linechart'));
//         chart.draw(data, options);
//     };

//     const drawBubbleChart = () => {
//         var data = window.google.visualization.arrayToDataTable([
//             ['ID', 'Month', 'Sales', 'Volume'],
//             ['A', 1, 12, 10],
//             ['B', 2, 5.5, 5],
//             ['C', 3, 14, 14],
//             ['D', 4, 8, 7],
//             ['E', 5, 7, 5],
//             ['F', 6, 18, 10]
//         ]);

//         var options = {
//             title: 'Sales Volume Analysis',
//             hAxis: { title: 'Month' },
//             vAxis: { title: 'Sales' },
//             bubble: { textStyle: { fontSize: 11 } }
//         };

//         var chart = new window.google.visualization.BubbleChart(document.getElementById('bubblechart'));
//         chart.draw(data, options);
//     };

//     const drawScatterChart = () => {
//         var data = window.google.visualization.arrayToDataTable([
//             ['Month', 'Sales'],
//             [1, 7],
//             [2, 8],
//             [3, 8.5],
//             [4, 7],
//             [5, 6],
//             [6, 8],
//             [7, 9],
//             [8, 7.5],
//             [9, 8],
//             [10, 9],
//             [11, 7],
//             [12, 8]
//         ]);

//         var options = {
//             title: 'Monthly Sales Distribution',
//             hAxis: { title: 'Month' },
//             vAxis: { title: 'Sales' },
//             legend: 'none'
//         };

//         var chart = new window.google.visualization.ScatterChart(document.getElementById('scatterchart'));
//         chart.draw(data, options);
//     };

//     return (
//         <div>
//             <header>
//                 <h1>Crop Sales Analytics</h1>
//             </header>
//             <main>
//                 <section className="chart-wrapper">
//                     <div id="piechart" className="chart"></div>
//                     <div id="barchart" className="chart"></div>
//                 </section>
//                 <section className="chart-wrapper">
//                     <div id="linechart" className="chart"></div>
//                     <div id="bubblechart" className="chart"></div>
//                 </section>
//                 <section className="chart-wrapper">
//                     <div id="scatterchart" className="chart"></div>
//                 </section>
//             </main>
//         </div>
//     );
// };

// export default CropSalesAnalytics;



import React, { useEffect } from 'react';
import '../styles/AboutUs.css';  // Ensure this path is correct

const CropSalesAnalytics = () => {
    useEffect(() => {
        // Load the Google Charts library
        const loadGoogleCharts = () => {
            window.google.charts.load('current', { packages: ['corechart'] });
            window.google.charts.setOnLoadCallback(drawCharts);
        };

        // Check if google is already available
        if (window.google && window.google.charts) {
            loadGoogleCharts();
        } else {
            const script = document.createElement('script');
            script.src = 'https://www.gstatic.com/charts/loader.js';
            script.onload = loadGoogleCharts;
            document.body.appendChild(script);
        }

        // Cleanup function to remove script
        return () => {
            const script = document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');
            if (script) document.body.removeChild(script);
        };
    }, []);

    const drawCharts = () => {
        drawPieChart();
        drawBarChart();
        drawLineChart();
        drawBubbleChart();
        drawScatterChart();
    };

    const drawPieChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['Crop', 'Sales'],
            ['Paddy', 11],
            ['Wheat', 2],
            ['Flour', 2],
            ['Sugar Cane', 2],
            ['Pineapple', 7]
        ]);

        const options = {
            title: 'Market Analytics'
        };

        const chart = new window.google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    };

    const drawBarChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['Crop', 'Sales'],
            ['Paddy', 11],
            ['Wheat', 2],
            ['Flour', 2],
            ['Sugar Cane', 2],
            ['Pineapple', 7]
        ]);

        const options = {
            title: 'Sales Comparison (Bar Chart)',
            hAxis: { title: 'Crops' },
            vAxis: { title: 'Sales' },
            bars: 'vertical'
        };

        const chart = new window.google.visualization.BarChart(document.getElementById('barchart'));
        chart.draw(data, options);
    };

    const drawLineChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['Month', 'Paddy', 'Wheat', 'Flour', 'Sugar Cane', 'Pineapple'],
            ['Jan', 3, 1, 1, 1, 2],
            ['Feb', 4, 2, 1, 1, 2],
            ['Mar', 5, 3, 2, 1, 3],
            ['Apr', 6, 3, 2, 2, 4],
            ['May', 7, 4, 2, 2, 5],
            ['Jun', 8, 4, 3, 3, 5],
            ['Jul', 9, 5, 3, 3, 6],
            ['Aug', 10, 5, 4, 4, 6],
            ['Sep', 11, 6, 4, 4, 7],
            ['Oct', 12, 6, 5, 5, 8],
            ['Nov', 13, 7, 5, 5, 8],
            ['Dec', 14, 7, 6, 6, 9]
        ]);

        const options = {
            title: 'Monthly Sales Trends',
            hAxis: { title: 'Month' },
            vAxis: { title: 'Sales' },
            series: { 0: { curveType: 'function' } }
        };

        const chart = new window.google.visualization.LineChart(document.getElementById('linechart'));
        chart.draw(data, options);
    };

    const drawBubbleChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['ID', 'Month', 'Sales', 'Volume'],
            ['A', 1, 12, 10],
            ['B', 2, 5.5, 5],
            ['C', 3, 14, 14],
            ['D', 4, 8, 7],
            ['E', 5, 7, 5],
            ['F', 6, 18, 10]
        ]);

        const options = {
            title: 'Sales Volume Analysis',
            hAxis: { title: 'Month' },
            vAxis: { title: 'Sales' },
            bubble: { textStyle: { fontSize: 11 } }
        };

        const chart = new window.google.visualization.BubbleChart(document.getElementById('bubblechart'));
        chart.draw(data, options);
    };

    const drawScatterChart = () => {
        const data = window.google.visualization.arrayToDataTable([
            ['Month', 'Sales'],
            [1, 7],
            [2, 8],
            [3, 8.5],
            [4, 7],
            [5, 6],
            [6, 8],
            [7, 9],
            [8, 7.5],
            [9, 8],
            [10, 9],
            [11, 7],
            [12, 8]
        ]);

        const options = {
            title: 'Monthly Sales Distribution',
            hAxis: { title: 'Month' },
            vAxis: { title: 'Sales' },
            legend: 'none'
        };

        const chart = new window.google.visualization.ScatterChart(document.getElementById('scatterchart'));
        chart.draw(data, options);
    };

    return (
        <div>
            <header>
                <h1>Crop Sales Analytics</h1>
            </header>
            <main>
                <section className="chart-wrapper">
                    <div id="piechart" className="chart"></div>
                    <div id="barchart" className="chart"></div>
                </section>
                <section className="chart-wrapper">
                    <div id="linechart" className="chart"></div>
                    <div id="bubblechart" className="chart"></div>
                </section>
                <section className="chart-wrapper">
                    <div id="scatterchart" className="chart"></div>
                </section>
            </main>
        </div>
    );
};

export default CropSalesAnalytics;
