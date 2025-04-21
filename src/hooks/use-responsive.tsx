import { useEffect, useState } from "react";

const useResponsiveOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            if (typeof window !== "undefined") {
                const width = window.innerWidth;
                console.log(width);

                if (width > 1091) {
                    setIsOpen(false);
                } else {
                    setIsOpen(true);
                }
            }
        };

        checkIfMobile(); // run initially
        window.addEventListener("resize", checkIfMobile); // run on resize

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    return isOpen;
};

export default useResponsiveOpen;
