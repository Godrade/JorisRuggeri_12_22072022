import React, {useEffect, useState} from "react";

import {getUserAPI} from "../../service/getUser";
import {BarChartGraph} from "../../components/chart/BarChart/BarChartGraph";
import {CardListActivities} from "../../components/CardListActivities";
import {UserInfo} from "./UserInfo";

import {RadarChartGraph} from "../../components/chart/RadarChart/RadarChartGraph";
import {LineChartGraph} from "../../components/chart/LineChart/LineChartGraph";

import {User} from "../../models/User";
import {PieChartGraph} from "../../components/chart/PieChart/PieChartGraph";

export const Home = () => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getUserAPI();
                setUser(data)
            } catch(err){
                console.error('[USER API] Une erreur est survenue');
            }
        }

        fetchData();

    }, [])
    if (!user) return null;

    return (
        <React.Fragment>
            <section className="container-fluid">
                <div className="row">
                    <UserInfo user={user.firstName}/>
                </div>
            </section>

            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-xl-9">
                        <BarChartGraph/>
                        <div className="row mt-3">
                            <LineChartGraph/>
                            <RadarChartGraph/>
                            <PieChartGraph todayScore={user.todayScore}/>
                        </div>
                    </div>
                    <div className="col-md-12 col-xl-3">
                        <CardListActivities user={user}/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}