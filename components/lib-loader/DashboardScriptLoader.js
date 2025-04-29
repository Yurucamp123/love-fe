'use client';
import { useEffect } from "react";

const DashboardScriptLoader = () => {
    useEffect(() => {
        const scripts = [
            "/assets/lib/dashboard/js/vendor/modernizr-3.6.0.min.js",
            "/assets/lib/dashboard/js/vendor/jquery-3.6.0.min.js",
            "/assets/lib/dashboard/js/vendor/jquery-migrate-3.3.0.min.js",
            "/assets/lib/dashboard/js/vendor/bootstrap.bundle.min.js",
            "/assets/lib/dashboard/js/plugins/waypoints.js",
            "/assets/lib/dashboard/js/plugins/wow.js",
            "/assets/lib/dashboard/js/plugins/magnific-popup.js",
            "/assets/lib/dashboard/js/plugins/perfect-scrollbar.min.js",
            "/assets/lib/dashboard/js/plugins/select2.min.js",
            "/assets/lib/dashboard/js/plugins/isotope.js",
            "/assets/lib/dashboard/js/plugins/counterup.js",
            "/assets/lib/dashboard/js/plugins/swiper-bundle.min.js",
            "/assets/lib/dashboard/js/plugins/jquery.circliful.js",
            "/assets/lib/dashboard/js/plugins/bootstrap-datepicker.js",
            "/assets/lib/dashboard/js/plugins/dark.js",
            "/assets/lib/dashboard/js/plugins/charts/index.js",
            "/assets/lib/dashboard/js/plugins/charts/xy.js",
            "/assets/lib/dashboard/js/plugins/charts/Animated.js",
            "/assets/lib/dashboard/js/plugins/armcharts5-script.js",
            "/assets/lib/dashboard/js/main.js?v=1.0"
        ];        

        scripts.forEach((src) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        });

        return () => {
            const scripts = document.querySelectorAll("script[src]");
            scripts.forEach((script) => script.remove());
        };
    }, []);

    return null;
};

export default DashboardScriptLoader;
