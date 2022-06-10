import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID rIMZ08tuSeeuddZ9bm_aQrbsFT1k_x6G-TKSD0uB9jI",
    },
});
