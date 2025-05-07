'use client';
import { useEffect } from "react";

const UserScriptLoader = () => {
    useEffect(() => {
        const scripts = [
            "/assets/lib/user/js/vendor/jquery-3.7.1.min.js",
            "/assets/lib/user/js/vendor/jquery-migrate-3.3.0.min.js",
            "/assets/lib/user/js/vendor/bootstrap.bundle.min.js",

            "/assets/lib/user/js/plugins/magnific-popup.js",
            "/assets/lib/user/js/plugins/perfect-scrollbar.min.js",
            "/assets/lib/user/js/plugins/swiper-bundle.min.js",
            "/assets/lib/user/js/plugins/slick.js",
            "/assets/lib/user/js/plugins/jquery.carouselTicker.js",
            "/assets/lib/user/js/plugins/masonry.min.js",
            "/assets/lib/user/js/plugins/scrollup.js",
            "/assets/lib/user/js/plugins/wow.js",
            "/assets/lib/user/js/plugins/waypoints.js",
            "/assets/lib/user/js/plugins/counterup.js",
            "/assets/lib/user/js/plugins/bootstrap-datepicker.js",
            "/assets/lib/user/js/plugins/dark.js",

            "/assets/lib/user/js/vendor/jquery.countdown.min.js",
            "/assets/lib/user/js/plugins/noUISlider.js",
            "/assets/lib/user/js/plugins/slider.js",
            
            "/assets/lib/user/js/main.js?v=1.0.0",
        ];

        scripts.forEach((src) => {
            const script = document.createElement("script");
            script.src = src;
            script.defer = true;
            document.body.appendChild(script);
        });

        return () => {
            const scripts = document.querySelectorAll("script[src]");
            scripts.forEach((script) => script.remove());
        };
    }, []);

    return null;
};

export default UserScriptLoader;
