import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {
                Authorization: "Client-ID rIMZ08tuSeeuddZ9bm_aQrbsFT1k_x6G-TKSD0uB9jI",
            },
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
