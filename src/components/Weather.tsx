import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCloudBolt } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudDrizzle } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudShowers } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudShowersHeavy } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudHail } from "./fontawesome/pro-duotone-svg-icons";
import { faSnowflake } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudSnow } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudSleet } from "./fontawesome/pro-duotone-svg-icons";
import { faSmog } from "./fontawesome/pro-duotone-svg-icons";
import { faSunHaze } from "./fontawesome/pro-duotone-svg-icons";
import { faHurricane } from "./fontawesome/pro-duotone-svg-icons";
import { faSun } from "./fontawesome/pro-duotone-svg-icons";
import { faMoon } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudSun } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudsSun } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudMoon } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudsMoon } from "./fontawesome/pro-duotone-svg-icons";
import { faCloud } from "./fontawesome/pro-duotone-svg-icons";
import { faClouds } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudFog } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudSunRain } from "./fontawesome/pro-duotone-svg-icons";
import { faCloudMoonRain } from "./fontawesome/pro-duotone-svg-icons";
import { faC } from "./fontawesome/pro-solid-svg-icons";
import { faCircle } from "./fontawesome/pro-regular-svg-icons";
import Axios from "axios";

interface Weather {
  temp: number;
  icon: IconDefinition;
  title: string;
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<Weather>({
    temp: 0,
    icon: faSun,
    title: "",
  });
  useEffect(() => {
    Axios.get(
      "http://api.openweathermap.org/data/2.5/weather?id=524901&q=tehran&units=metric&appid=72cae6514daea7b44419caa7842940b8"
    ).then((res) => {
      let isNight: boolean = false;
      if (res.data.dt >= res.data.sys.sunset) {
        isNight = true;
      }

      const weatherState = res.data.weather[0].id;
      switch (weatherState) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faCloudBolt,
            title: res.data.weather[0].main,
          });
          break;

        case 300:
        case 301:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faCloudDrizzle,
            title: res.data.weather[0].main,
          });
          break;

        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faCloudShowers,
            title: res.data.weather[0].main,
          });
          break;

        case 520:
        case 521:
        case 522:
        case 531:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faCloudShowersHeavy,
            title: res.data.weather[0].main,
          });
          break;

        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: isNight ? faCloudMoonRain : faCloudSunRain,
            title: res.data.weather[0].main,
          });
          break;

        case 511:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faCloudHail,
            title: res.data.weather[0].main,
          });
          break;

        case 600:
        case 601:
        case 602:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faSnowflake,
            title: res.data.weather[0].main,
          });
          break;

        case 611:
        case 612:
        case 613:
        case 614:
        case 615:
        case 616:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faCloudSleet,
            title: res.data.weather[0].main,
          });
          break;

        case 620:
        case 621:
        case 622:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faCloudSnow,
            title: res.data.weather[0].main,
          });
          break;

        case 701:
        case 711:
        case 731:
        case 751:
        case 761:
        case 762:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faSmog,
            title: res.data.weather[0].main,
          });
          break;

        case 721:
        case 741:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: isNight ? faCloudFog : faSunHaze,
            title: res.data.weather[0].main,
          });
          break;

        case 771:
        case 781:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faHurricane,
            title: res.data.weather[0].main,
          });
          break;

        case 800:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: isNight ? faMoon : faSun,
            title: res.data.weather[0].main,
          });
          break;

        case 801:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: isNight ? faCloudMoon : faCloudSun,
            title: res.data.weather[0].main,
          });
          break;

        case 802:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: isNight ? faCloudsMoon : faCloudsSun,
            title: res.data.weather[0].main,
          });
          break;

        case 803:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faCloud,
            title: res.data.weather[0].main,
          });
          break;

        case 804:
          setWeather({
            temp: Math.round(res.data.main.temp),
            icon: faClouds,
            title: res.data.weather[0].main,
          });
          break;

        default:
          break;
      }
    });
  }, []);

  return (
    <Card>
      <CardContent>
        <Stack direction='row' alignItems='flex-end' spacing={3}>
          <FontAwesomeIcon icon={weather.icon} size='6x' />
          <Stack>
            <Stack direction='row' alignItems='center'>
              <Typography variant='h3'>{weather.temp}</Typography>
              <Stack
                direction='row'
                alignItems='flex-start'
                sx={{ marginLeft: "0 !important" }}>
                <FontAwesomeIcon icon={faCircle} size='2xs' />
                <FontAwesomeIcon icon={faC} size='2x' />
              </Stack>
            </Stack>
            <Typography variant='body2'>{weather.title}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Weather;
