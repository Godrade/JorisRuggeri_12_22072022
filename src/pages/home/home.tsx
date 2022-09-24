import React, { useEffect, useState } from "react";

import { getUserAPI } from "../../service/getUser";
import { BarChartGraph } from "../../components/chart/BarChart/BarChartGraph";
import { CardListActivities } from "../../components/CardListActivities";
import { UserInfo } from "./UserInfo";

import { RadarChartGraph } from "../../components/chart/RadarChart/RadarChartGraph";
import { LineChartGraph } from "../../components/chart/LineChart/LineChartGraph";
import { RadialChartGraph } from "../../components/chart/RadialChart/RadialChartGraph";

import { User } from "../../service/getUser";

export const Home = () => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
      async function fetchData() {
        const data = await getUserAPI();
        setUser(data)
      }
      fetchData();
        
    }, [])
    if (!user) return null;

    return (
        <React.Fragment>
            <section className="container-fluid">
              <div className="row">
                <UserInfo user={user.userInfos.firstName} />
              </div>
            </section>
            
            <section className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <BarChartGraph />
                  <div className="row mt-3">
                    <LineChartGraph />
                    <RadarChartGraph />
                    <RadialChartGraph user={user} />
                  </div>
                </div>
                <div className="col-3">
                  <CardListActivities user={user} />
                </div>
              </div>
            </section>
        </React.Fragment>
    )
}