import React, { useEffect, useState } from "react";

//import { getUserAPI } from "../../service/getUser";
import { BarChartGraph } from "../../components/BarChartGraph";
import { CardIcon } from "../../components/CardIcon";


//import { UserID } from "../../service/userID";


//Import Icon
import iconCalories from "../../images/icon/calories-icon.svg";
import iconProtein from "../../images/icon/protein-icon.svg";
import iconCarbs from "../../images/icon/carbs-icon.svg";
import iconFat from "../../images/icon/fat-icon.svg";

export const Home = () => {

      const [getUser, setUser] = useState(null)
      
      useEffect(() => {
        const callAPI = async () => {
            const response = await fetch(`http://localhost:3000/user/12`).then((response) => {
                return response.json()
            });

            setUser(response);
        }
        callAPI();        
      }, [getUser])

    return (
        <React.Fragment>
            <section className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h1 className="title">Bonjour <span className="title-name">{getUser && getUser['data']['userInfos']['firstName']}</span></h1>
                  <p className="objectif-success">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
              </div>
            </section>
            
            <section className="container-fluid">
              <div className="row">
                
                <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-9 col-xxl-9">
                  <BarChartGraph />
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-6	col-xl-3 col-xxl-3">
                  <CardIcon iconLink={iconCalories} number={getUser && getUser['data']['keyData']['calorieCount']} type="kCal" name='Calories' />
                  <CardIcon iconLink={iconProtein} number={getUser && getUser['data']['keyData']['proteinCount']} type="g" name='Proteines' />
                  <CardIcon iconLink={iconCarbs} number={getUser && getUser['data']['keyData']['carbohydrateCount']} type="g" name='Glucides' />
                  <CardIcon iconLink={iconFat} number={getUser && getUser['data']['keyData']['lipidCount']} type="g" name='Lipides' />
                </div>

              </div>
            </section>
        </React.Fragment>
    )
}