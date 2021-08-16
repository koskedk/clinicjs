import React,{useEffect, useState} from "react";
import {PageNav} from "@clinicjs/ui";
import {links} from "./page-links";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Summary} from "../inventory/Summary";
import {Receipt} from "../inventory/Receipt";
import {History} from "../orders/History";
import {Active} from "../orders/Active";

export const PageHeader = () => {
    const [activelink, setActiveLink] = useState("/pharmacy");

    useEffect(() => {
        const current = window.location.pathname.split("/")[2];
        if (current) {
            const getLink = links.filter((x) => `/pharmacy/${current.toLowerCase()}` === x.href);
            if (getLink.length > 0) {
                setActiveLink(getLink[0].href);
            }
        }
    }, []);

    const checkActive = (href) => {
        console.log('active',activelink)
        console.log('checkref',href)
        console.log('path',window.location.pathname)
        return activelink === href ? "active" : "";
    };

    return (

        <Router>
            <div>
                <PageNav
                    links={links}
                    getActiveLink={checkActive}
                ></PageNav>
                <Switch>
                    <Route path="/pharmacy/history">
                        <History />
                    </Route>
                    <Route path="/pharmacy/summary">
                        <Summary />
                    </Route>
                    <Route path="/pharmacy/receipt">
                        <Receipt />
                    </Route>
                    <Route path="/pharmacy">
                        <Active />
                    </Route>
                </Switch>
            </div>
        </Router>



    );
};
