import React, { useEffect, useState } from "react";

import { getUserAPI } from "../../service/getUser";
import { BarChartGraph } from "../../components/BarChartGraph";
import { CardListActivities } from "../../components/CardListActivities";
import { UserInfo } from "./UserInfo";

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
                <BarChartGraph />
                <CardListActivities user={user} />
              </div>
            </section>
        </React.Fragment>
    )
}